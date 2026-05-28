// =============================================================
//  SLIDE & SOLVE  —  Image Manifest
// =============================================================
//
//  This is the ONLY file you need to edit to add or remove images.
//
//  HOW TO ADD AN IMAGE
//  -------------------
//  1. Copy your image file into the matching folder:
//       images/scenery/        ← landscapes, nature, sky
//       images/architecture/   ← buildings, bridges, interiors
//       images/cars/           ← vehicles of any kind
//       images/people/         ← portraits, crowds, street
//       images/custom/         ← anything else you like
//
//  2. Add the path to the array below, e.g.:
//       'images/scenery/my_new_photo.jpg'
//
//  Rules:
//   • Each category needs at least 1 image to appear in the game.
//   • Paths are relative to index.html (don't add a leading slash).
//   • JPG, PNG, and WEBP all work fine.
//   • Square images look best; landscape/portrait are cropped to square.
//   • Aim for 600–1200px wide and under 500 KB for fast mobile loading.
//
//  To HIDE a category entirely, empty its array: scenery: []
// =============================================================

const IMAGES = {

  scenery: [
    // ── Drop your scenery images into images/scenery/ then list them here ──
    'images/scenery/mountain.jpg',
    'images/scenery/lake.jpg',
  ],

  architecture: [
    // ── Drop your architecture images into images/architecture/ ──
    'images/architecture/Taj_mahal.jpg',
    'images/architecture/Skyscrapers.jpg',

  ],

  cars: [
    // ── Drop your car images into images/cars/ ──
    'images/cars/red.jpg',
    'images/cars/race.jpg',
  ],

  people: [
    // ── Drop your people images into images/people/ ──
    'images/people/bike.jpg',
    'images/people/sofa.jpg',

  ],

  // ── OPTIONAL EXTRA CATEGORY ──────────────────────────────────
  // Rename "custom" to whatever you like, e.g. "animals" or "space".
  // Update the label in index.html: search for data-cat="custom"
  // and change the displayed name there too.
  custom: [
    // 'images/custom/my_photo_1.jpg',
    // 'images/custom/my_photo_2.jpg',
  ],

};
