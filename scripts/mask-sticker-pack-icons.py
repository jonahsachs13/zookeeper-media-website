#!/usr/bin/env python3
"""Clip sticker pack logos to the iMessage app icon shape (1024px wide)."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
MASK_PATH = ROOT / "public/sticker-packs/imessage-icon-mask.png"
SOURCE_DIR = ROOT / "public/sticker-packs/source"
OUT_DIR = ROOT / "public/sticker-packs"

TARGET_WIDTH = 1024
# Supersample when drawing the ellipse for clean anti-aliased edges (no blur halo).
SUPERSAMPLE = 4

LOGOS = {
    "faces-on-things.png": SOURCE_DIR / "faces-on-things.jpg",
    "gma-and-crow.png": SOURCE_DIR / "gma-and-crow.png",
    "brainrot.png": SOURCE_DIR / "brainrot.png",
    "sayings-3.png": SOURCE_DIR / "sayings-3.png",
    "minimalism.png": SOURCE_DIR / "minimalism.png",
    "gen-z-slang.png": SOURCE_DIR / "gen-z-slang.png",
}


def cover_resize(image: Image.Image, width: int, height: int) -> Image.Image:
    src_w, src_h = image.size
    scale = max(width / src_w, height / src_h)
    resized = image.resize((round(src_w * scale), round(src_h * scale)), Image.LANCZOS)
    left = (resized.width - width) // 2
    top = (resized.height - height) // 2
    return resized.crop((left, top, left + width, top + height))


def ellipse_alpha_from_mask(mask_alpha: Image.Image) -> Image.Image:
    """Build a smooth ellipse alpha from the mask bounds — no blur halo."""
    bbox = mask_alpha.getbbox()
    if not bbox:
        raise ValueError("Mask has no opaque pixels")

    width, height = mask_alpha.size
    sw, sh = width * SUPERSAMPLE, height * SUPERSAMPLE
    scaled_bbox = tuple(v * SUPERSAMPLE for v in bbox)

    hi_res = Image.new("L", (sw, sh), 0)
    ImageDraw.Draw(hi_res).ellipse(scaled_bbox, fill=255)
    return hi_res.resize((width, height), Image.LANCZOS)


def load_mask() -> Image.Image:
    mask = Image.open(MASK_PATH).convert("RGBA")
    if mask.width != TARGET_WIDTH:
        target_height = round(mask.height * TARGET_WIDTH / mask.width)
        mask = mask.resize((TARGET_WIDTH, target_height), Image.LANCZOS)
    return ellipse_alpha_from_mask(mask.split()[3])


def mask_logo(logo_path: Path, alpha: Image.Image, size: tuple[int, int]) -> Image.Image:
    logo = Image.open(logo_path).convert("RGBA")
    fitted = cover_resize(logo, size[0], size[1])
    fitted.putalpha(alpha)
    return fitted


def main() -> None:
    alpha = load_mask()
    size = alpha.size

    for out_name, logo_path in LOGOS.items():
        if not logo_path.exists():
            raise FileNotFoundError(f"Missing logo: {logo_path}")
        result = mask_logo(logo_path, alpha, size)
        result.save(OUT_DIR / out_name, optimize=True)
        print(f"Wrote {OUT_DIR / out_name}")


if __name__ == "__main__":
    main()
