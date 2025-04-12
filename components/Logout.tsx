"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.actions";

const Logout = () => {
    const handleLogout = async () => {
      await signOut(); // Call your logout function
      window.location.href = "/sign-in"; // Redirect manually (since useRouter can be flaky on reload)
    };
  
    return (
      <Button className="btn-secondary flex-1" onClick={handleLogout}>
        Logout
      </Button>
    );
  };
  
  export default Logout;