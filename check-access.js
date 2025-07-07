userRole = "admin";

function checkAccess(userRole) {
    if (userRole === "admin") {
        return "Full Access";
    } else if (userRole === "member") {
        return "Limited Access";
    } else {
        return "Deny Access";
    }
}