import React from "react";
import { Onboarding } from '@ikhokha/onboard';

const Onboard = () => {
    const DBUser = {
        merchantId: "Merchant-7754",
        username: "13cd1bf9-0af6-48a5-ab84-f5c2df6bd75a",
        email: "qoroty@mailinator.com",
        id_token: "eyJraWQiOiJvMXBmZ29XNTFuXC9OOVFpR2wxdEJyRUh1VlJ1S2tpdHNkUFhYXC9HNFdwZm89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIxM2NkMWJmOS0wYWY2LTQ4YTUtYWI4NC1mNWMyZGY2YmQ3NWEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfUlowZ0VCcGk5IiwiY29nbml0bzp1c2VybmFtZSI6IjEzY2QxYmY5LTBhZjYtNDhhNS1hYjg0LWY1YzJkZjZiZDc1YSIsImdpdmVuX25hbWUiOiJNZXJjaGFudC03NzU0Iiwib3JpZ2luX2p0aSI6ImEwYzI1ODVkLWY4MGItNDAxYy1hNzAzLTA0ZjRiMmI0OTA5MSIsImF1ZCI6IjNndHNranNmMm00dDk4dml0dmpnc2dwbGJnIiwiZXZlbnRfaWQiOiJjZDBlZDM5Yy01MjY4LTQxYWQtYTYxNS05MzdmYWFhOTc3MGQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY2NTc0NzUxMywiZXhwIjoxNjY1NzUxMTEzLCJjdXN0b206cm9sZSI6Ik1FUkNIQU5UX09XTkVSIiwiaWF0IjoxNjY1NzQ3NTEzLCJqdGkiOiI4MzI5NDNkNS0yYmZhLTQ2MmYtYjc4Ni01OWQ0NTNlMDdhYjIiLCJlbWFpbCI6InFvcm90eUBtYWlsaW5hdG9yLmNvbSJ9.it7lewHUXAB6q4HZ3Gevdj7akVjDPRdTJQcyOd4ih_lFO-43DQoDM_Cajg4HxiO3Awe0gQaBHvxORIGBhRPRvvzmt3EDCkWVWq9Jtr3dkMpgseR-zdJJhNsvBa7iB-6lRSbpSVthjJrddOKXoEclWDd30CvDSlO2YpozKLYoW-mUfbPW9Ox9CS1zZ0x3T7fzCTHFd5oM1sMVLwu3IM40DShYUJEcotMeHYLPCQ2QJej0UWp5qjLVuusPJKPYn2G6BpfIuGTqEf7ML86KAnBsKCbXp_wv2XqmAF_xDrHD7T_IB8YnBMvvIgbwWuw61lHA83htcq6Ujr9v3euLdcAefA",
        uid: "8379"
    }
    // <nav class="bottom-space"><header class="header"><div class="navbar-container"><div class="navbar-container-title">Complete your profile</div></div></header></nav>
    return (
        <div className="pb-sect">
            <nav className="bottom-space">
                <header className="header">
                    <div className="navbar-container">
                        <div className="navbar-container-title">Complete your profile</div>
                    </div>
                </header>
            </nav>

            <Onboarding {...DBUser}/>
        </div>
    );
};

  export default Onboard;