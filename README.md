# Olivia Fashion — AR Visiting Card starter

This starter turns the **printed card image** into an image-tracking target. When a visitor opens the hosted page on their phone and points the camera at the card, animated text and decorative elements appear aligned over the card.

## Important setup step: compile the image target
MindAR needs a compiled `card-target.mind` file; it cannot track the PNG directly.

1. Open the MindAR image-target compiler: https://hiukim.github.io/mind-ar-js-doc/tools/compile/
2. Upload `assets/card-target.png`.
3. Compile and download the generated `.mind` file.
4. Save it as `assets/card-target.mind` in this project folder.

Use the same exact card artwork when printing. For reliable tracking, print it sharp, matte if possible, and avoid glare.

## Run locally
Camera access generally requires HTTPS or localhost.

1. Install Node.js (LTS).
2. Open a terminal in this folder.
3. Run:
   ```bash
   npx serve .
   ```
4. Open the localhost URL on the computer for initial checks. For phone testing, deploy to an HTTPS host such as Vercel or GitHub Pages, then open the URL on the phone.
5. Allow camera access and tap **Start AR experience**. Point the camera at the printed card.

## Publish free
One easy route:
1. Create a GitHub repository and upload the project files, including `assets/card-target.mind`.
2. Import the repository into Vercel, or use GitHub Pages.
3. Open the HTTPS URL on a phone.

## Customize before sharing
The supplied PDF uses sample details (Olivia Wilson, `+123-456-7890`, `hello@reallygreatsite.com`, and `reallygreatsite.com`). Replace these with the real card owner's details in `index.html` before publishing.

## Notes
- This is a starter prototype, not a finished production deployment.
- The browser must open the AR webpage before it can scan the card. A small QR code or NFC link on the back of the printed card can launch that page; the front itself remains the image target.
- The current overlay uses animated 2D text/shapes in 3D space. A custom animated 3D fashion model can be added later as a GLB asset.
- Test on the actual phone models your visitors use; camera and WebGL support varies.
