import ActiveWindow from "@paymoapp/active-window";

ActiveWindow.initialize();
if (!ActiveWindow.requestPermissions()) {
  console.log(
    "⚠️ Permissions d'accessibilité non accordées. Veuillez les activer pour que le bot fonctionne correctement."
  );
}

export function isAppActive(appName: string): boolean {
  const activeWin = ActiveWindow.getActiveWindow();
  return activeWin.application.includes(appName);
}
