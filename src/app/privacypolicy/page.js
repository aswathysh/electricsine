import { Header } from "@/components/sharables/Header";
import Grid from "@mui/material/Grid2";
import React from "react";
export default function Home() {
    return (
        <div className="ims-src-app-privacypolicy-page-js-0001" >
            <Header />
            <Grid container  className={["light_bg", "ims-src-app-privacypolicy-page-js-0002"].filter(Boolean).join(" ")}>
                <Grid className="ims-src-app-privacypolicy-page-js-0003" item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                    >
                    <div className="ims-src-app-privacypolicy-page-js-0004" >
                        <div className="ims-src-app-privacypolicy-page-js-0005" >

                            <h1 className="ims-page-heading-legal">
                                Privacy Policy                            </h1>
                        </div>
                        <div className="ims-src-app-privacypolicy-page-js-0006" >
                            <Grid className="ims-src-app-privacypolicy-page-js-0007" item size={{ xs: 11, md: 10, lg: 10, sm: 11 }}
                                >
                                <p className="ims-src-app-privacypolicy-page-js-0008" >
                                    A privacy policy outlines how we collect, use, and manage customer data. It is important to address aspects such as the type of information collected, how it is stored, who has access to it, and how it is protected. Additionally, the policy detail how customers can request access to their data or have it removed if needed. By having a comprehensive privacy policy in place, we can build trust with our customers and demonstrate our commitment to protecting their privacy and data security.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0009" >
                                    ELECTRICSINE is committed to protecting the privacy and security of our customer&apos;s personal information. This Privacy Policy outlines how we collect, use, store, and protect the data when you purchase our electrical or any other training and education materials online.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0010" >
                                    Information We Collect:
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0011" >
                                    When you make a purchase on our website, we collect personal information such as your name, phone number, email address, billing address, and payment details.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0012" >
                                    We may also collect non-personal information such as your IP address, browser type, operating system, and referring website for analytical purposes.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0013" >
                                    How We Use Your Information:
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0014" >
                                    We use the information you provide to process your order, communicate with you about your purchase, and provide customer support.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0015" >
                                    Your personal information may also be used for marketing purposes, such as sending you promotional offers or newsletters. You can opt out of these communications at any time.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0016" >
                                    Data Security:
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0017" >
                                    We take appropriate measures to ensure the security of your personal information. This includes using encryption technology to protect data transmission and restricting access to your information to authorized personnel only.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0018" >
                                    Our website is regularly monitored for vulnerabilities and security breaches to ensure the safety of your information.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0019" >
                                    Cookies:
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0020" >
                                    We may use cookies to enhance user experience and track usage patterns on our website. Users can choose to accept or reject cookies through their browser settings.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0021" >
                                    Third-Party Links: Our website may contain links to third-party websites for additional resources or references. We are not responsible for the privacy practices or content of these external sites.                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0022" >
                                    Access to Your Data:
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0023" >
                                    You have the right to request access to the personal information we hold about you. If you would like to review, edit, or delete your data, please contact us using the information provided below.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0024" >
                                    We will respond to your request within a reasonable timeframe and provide assistance in updating or deleting your information as required by law.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0025" >
                                    By using our website and purchasing our products, you consent to the collection and use of your personal information as described in this Privacy Policy. We reserve the right to update this policy periodically, and any changes will be reflected on this page.
                                </p>
                                <p className="ims-src-app-privacypolicy-page-js-0026" >
                                    If you have any questions or concerns about our Privacy Policy, please contact us at electricsine2024@gmail.com, +919447885463.
                                </p>
                            </Grid>

                        </div>
                    </div>
                </Grid>

            </Grid>
        </div >
    )
}
const styles = {


    sliderImage: {
        width: '100%',
        height: '500px', // Adjust the height as needed
        objectFit: 'cover',
    },
    mainsubhead: {
        fontSize: "45px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
    heading: {
        fontSize: "20px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontWeight: 600,
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
    fullwidth: { width: "100%" },
    contentleft: {
        display: 'flex',
        justifyContent: 'left'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column'
    },

    subheading: {
        fontSize: "18px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
        textAlign: 'justify'
    },
    paddingTop: {
        paddingTop: '2% '
    }
};