// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityQ962Smdns",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorCommunityQ962Smdns",
            targets: ["smdnsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "smdnsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/smdnsPlugin"),
        .testTarget(
            name: "smdnsPluginTests",
            dependencies: ["smdnsPlugin"],
            path: "ios/Tests/smdnsPluginTests")
    ]
)