import Foundation

@objc public class smdns: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
