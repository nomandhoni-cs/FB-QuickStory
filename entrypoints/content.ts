export default defineContentScript({
  matches: ["https://www.facebook.com/stories/create"],
  main() {
    console.log("Facebook Video Story Uploader content script loaded.");

    // Wait for the DOM to load

    // Modify the file input to accept video files
    const fileInput = document.querySelector<HTMLInputElement>(
      'input[type="file"][accept="image/*,image/heif,image/heic"]'
    );
    console.log(fileInput);

    if (fileInput) {
      fileInput.setAttribute("accept", "video/*,image/*,image/heif,image/heic");
      console.log("Modified file input to accept video files.");
    } else {
      console.warn("File input not found.");
    }

    // Update the "Create a Photo Story" text
    const photoStoryDiv = document.querySelector<HTMLDivElement>(
      "div.x9f619.x14ctfv.x78zum5.x67ct29.x117nqv4.xl56j7k.x5ib6vp.xc73u3c.x1n2onr6.x2b8uid.xh8yej3"
    );

    if (photoStoryDiv) {
      photoStoryDiv.textContent = "Create a Photo or Video Story";
      console.log('Updated text to include "Video".');
    } else {
      console.warn("Photo story div not found.");
    }
  },
});
