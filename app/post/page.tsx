'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */      
import { Metadata, ResolvingMetadata } from "next";

const Page = () => {
    return (
        <div>
            LOOOOL is it page
            <button onClick={() => {
                const childWindow = window.open('/login', 'login auth thing', 'popup');
                setTimeout(() => {
                    childWindow?.close()
                }, 5000)
            }}>
                open new window that closes in 5 seconds
            </button>
        </div>
    );
}

export default Page;