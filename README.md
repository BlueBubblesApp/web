# BlueBubbles-Web-App
A BlueBubbles client for your browser!

### This is only the deployment for our webapp. Please view the the [BlueBubbles-app](https://github.com/BlueBubblesApp/bluebubbles-app) repo to create any Issues or PRs.

## Build Instructions

1. Follow the Flutter setup instructions [here](https://flutter.dev/docs/get-started/install)
2. Fork the [BlueBubbles-app](https://github.com/BlueBubblesApp/bluebubbles-app) repo and run `flutter pub get`
3. Run `flutter pub global activate peanut` (this activates the build system for web)
4. Run `flutter pub global run peanut:peanut --web-renderer=canvaskit` (this builds the actual webapp)
5. The peanut tool will allow you to push to a configured remote, the command will be given at the end of the terminal output
6. For PWA support, you may need to modify `flutter_service_worker.js` after the build files are pushed. Comment out line 59 (`"/"`), and PWA support should be active.
