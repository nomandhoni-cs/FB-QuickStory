export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
  browser.runtime.setUninstallURL("https://blinkeye.app/", () => {});
  browser.runtime.setUninstallURL("https://blinkeye.app/en/goodbye", () => {});
  // Listener for extension installation/updates
  browser.runtime.onInstalled.addListener(async (details) => {
    browser.tabs.create({
      url: browser.runtime.getURL("/whats-new.html"),
    });
  });
});
