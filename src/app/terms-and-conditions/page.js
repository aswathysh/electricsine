import { Header } from "@/components/sharables/Header";
import Grid from "@mui/material/Grid2";
import React from "react";
import './terms.css';
export default function Home() {
    return (
        <div style={{ backgroundColor: 'white !important', height: '100vh !important' }}>
            <Header />
            <Grid container style={{ justifyContent: 'center', backgroundColor: 'white !important' }} className="light_bg">
                <Grid itemsize={{ xs: 12, md: 10, lg: 10, sm: 12 }}
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
                    <div style={{ ...styles.fullwidth }}>
                        <div style={{ ...styles.center, ...styles.fullwidth }}>
{/* <a href="#poduct-info">product</a>
<a href="#subscription">subscription</a>

<a href="#shipping-delivery">sub</a>
<a href="#cancellation-refund">cancel</a>
<a href="#payment-thirdparty_serviceprovider">payment</a> */}



                            <h1
                                style={{
                                    ...styles.mainsubhead,
                                    ...styles.aboutheadpadding,
                                    // ...styles.pt3,
                                    // ...styles.aboutHead,
                                }}
                            >
                                The terms and Conditions of Your purchase and Subscriptions
                            </h1>
                        </div>
                        <div style={{ ...styles.center, ...styles.fullwidth }}>
                            <Grid item size={{ xs: 11, md: 10, lg: 10, sm: 11 }}
                                style={{ ...styles.contentleft, ...styles.column }}>
                                <p style={styles.subheading}>
                                    Welcome to ELECTRICSINE training services! These terms and conditions outline the rules and regulations for the use of our website. Our training materials or QUIZ programme can be accessed online with LOGIN ID and password. After payment, you could access our training materials and quiz programme ONLINE or real time. This access of web site after payment will be valid for ONE YEAR. After one year you need to renew the account by do payment again.                                 </p>
                                <p style={{ ...styles.heading }} id="product-info">
                                    1. Product Information
                                </p>
                                {/* <p style={styles.subheading}> */}
                                <ul style={{ ...styles.subheading }} className="square-list">
                                    <li>We strive to ensure that all product information, pricing, and availability are accurate; however, we cannot guarantee that all information is up to date at all times. Specify the terms of use for the educational materials, clarifying that they are for personal use only and cannot be shared, reproduced, or distributed without permission.</li>
                                    <li>Our products are Training materials for Electrical, Instrumentation and Electronics. Whoever pay online and signed up, they can access our web site training programme and quiz section for ONE YEAR.</li>
                                    <li>All access of training and education materials are conducted exclusively online through our website. By placing an order through our site, you warrant that you are legally capable of entering into binding contracts.</li>
                                </ul>
                                <p style={{ ...styles.heading }} id="subscription">
                                    2. Subscription
                                </p>
                                {/* <p style={styles.subheading}> */}
                                <ul style={{ ...styles.subheading }} className="square-list">
                                    <li>Purchase of a Subscription will allow you access only to the content available under the category of content for which you have purchased the Subscription.</li>
                                    <li>The Services offered, and the validity/term of your Subscription <strong>(“Subscription Period”)</strong>  may vary depending on the plan you may purchase. Hence, before you proceed to purchase any Subscription, please read and understand the details of the Subscription(s) you intend to purchase on the Platform. If you are unclear about any part of the Subscription offering or need further clarification, then please feel free to write to us prior to your purchase at email address provided in the ‘Contact for User Support/Queries’ section below.</li>
                                    <li>We may personalize Services and feature them as part of Subscriptions, including showing you recommendations on content in the subscribed category, and other related categories that might be of interest to you. We also endeavor to continuously improve the Subscription offerings to improve your Platform experience.</li>
                                    <li>Subscription Period may be extended upon renewal of your already purchased Subscription. The terms of renewal, if any, can be found on our Site and/or Application. However, please note that the prices may stand revised from the time of your first purchase of the Subscription.</li>
                                    <li>The Subscription is of a personal nature and is solely for the benefit of the person subscribing and is not allowed to be resold by you or transferred to or shared with any other person for consideration or otherwise. In the event we get to know that any User has resold / transferred / shared Subscription with another person, then electricsine retains the right to cancel/terminate the Subscription forthwith.</li>
                                    <li>Outline the process for creating user accounts, emphasizing the importance of confidentiality regarding login credentials and prohibiting account sharing. Learning content you access after subscription is in online streaming</li>
                                    <li>Depending on the Subscription Service you have purchased, you may be given access to certain additional Services and features. The additional terms applicable to each of these additional Services may be made available to you on the Platform in the form of terms and conditions</li>
                                </ul>
                                {/* </p> */}
                                <p style={{ ...styles.heading }} id="payment-thirdparty_serviceprovider">
                                    3. Payment and Third-party service provider
                                </p>
                                <ul style={{ ...styles.subheading }} className="square-list">
                                    <li>We accept online payments via Net banking, Debit card payment, UPI Payment. Payment must be made in full at the time of purchase. Any billing information provided must be accurate and complete.</li>
                                    <li><b>Pricing and Payments:</b>You can purchase a Subscription Service of your choice for any category of content by following instructions on the Platform and making the payment applicable for the Subscription you intend to purchase. Please read the below terms applicable for the purchase of your Platform Subscription. The below terms are to be read with any other terms communicated to you at the time of purchase of your Subscription.</li>
                                    <li>You agree to pay all Subscription fees and charges that are attributable to your account on the Platform and that you are solely responsible for payment of these fees and charges. The Subscriptions are payable in full and in advance and are valid until the completion of the applicable Subscription Period or until otherwise cancelled or terminated in accordance with the terms of this Agreement.</li>
                                </ul>
                                <p style={styles.subheading}>
                                    If you have specifically authorized us, then the payments for the applicable Subscriptions are automatically charged at the beginning of each billing period, unless you withdraw your authorization or submit a cancellation request to us directly through your account prior to the start of the billing period or in writing via email to the address specified in the ‘Contact for User Support/Queries’ section below. The payment for your Subscription will be charged upon the anniversary of its billing period if the payments for Subscription are in more than a single tranche. Subject to your specific authorization and applicable laws, you agree that Electricsine may charge any recurring service to the credit card or debit card or account that you provide/link at the time of your first purchase of the Subscription or as updated by you through your account on the Platform, provided such updation takes place prior to upcoming billing period.
                                </p>
                                <p style={styles.subheading}>
                                    If you have not completed payments for your Subscriptions, we may restrict / suspend your access to the Platform until your account becomes current and paid in full.
                                </p>
                                <p style={styles.subheading}>
                                    We reserve the right to pursue the fee owed to us using collection methods which may include charging other payment methods on file with us and/or retaining collection agencies or legal counsel.
                                    Your payments to electricsine shall be subject to applicable taxes including without limitation Goods and Service Taxes (GST) and Value Added Taxes (VAT) or other similar taxes as may be applicable in your country of residence/from where you have created your account on the Platform/ purchased the underlying Subscriptions.
                                </p>
                                <p style={styles.subheading}>
                                    We reserve the right to change/revise the pricing of the Subscriptions. For existing Subscriptions for which the applicable fees have been already received by us, we will implement the price changes during the next billing period or renewal of the Subscription.
                                </p>
                                <p style={styles.subheading}>
                                    We further reserve the right to offer custom plans and pricing (including discounts and / or special offers) in addition to what is offered on the Platform, which include offering custom billing and payment terms, that are different from our standard terms.
                                </p>
                                <p style={styles.subheading}>
                                    We use third-party payment gateways and/or aggregators to process payments applicable to the Services offered by us. Third-party payment gateway(s) made available to you may vary depending on the Subscription you choose. Similarly, we have also enabled integration of third-party payment providers to facilitate better payment options to you, which may vary depending on your territory or the Subscription you choose. Third-party payment gateways/aggregators and third- party payment providers shall collectively be referred to as <strong>“Third-Party Service Providers”</strong>.
                                </p>
                                <p style={styles.subheading}>
                                    Third-Party Service Providers may also charge you fees to use or access their services and may require your Personal Information to complete any transaction for the Platform. Further, to facilitate completion of your payments to us through the Platform or avail the payment options provided to you, you may be redirected to an external website operated by the Third-Party Service Provider. We cannot and do not (i) guarantee the adequacy of the privacy and security practices employed by or the content and media provided by the Third-Party Service Provider or its respective websites or (ii) control collection or use of your Personal Information by such Third-Party Service Provider. Hence, prior to using any services offered by a Third-Party Service Provider, we suggest that you read their terms and conditions, privacy policy and other policies, that may apply, to understand their terms of usage and to understand how your Personal information is being processed. Electricsine is not affiliated to any Third-Party Service Provider and neither electricsine nor any of the Third-Party Service Provider are agents or employees of the other.                                </p>
                                <p style={styles.subheading}>
                                    Further, pursuant to the payment option you may choose, you may be required to enter into a separate agreement with the relevant Third-Party Service Provider. This agreement with the Third-Party Service Provider is an independent contract/agreement between you and such Third-Party Service Provider and electricsine shall in no manner be a party to the same. Electricsine is only facilitating various payment options to you and is not offering the payment by itself in any manner.
                                </p>
                                <ul style={{ ...styles.subheading }} className="square-list">
                                    <li>You agree that you are solely responsible for all charges that occur through such Third-Party Service Providers and acknowledge and agree to indemnify, defend, and hold harmless Electricsine, its licensors, their affiliates, and their respective officers, directors, employees, and agents from any loss arising out of or related to the use of the Platform or any purchases made through the Platform. This obligation will survive your use of the Platform and termination of your Agreement with us. For purposes of the Platform Terms, “Loss” means all losses, liabilities, damages, awards, settlements, claims, suits, proceedings, costs, and expenses (including reasonable legal fees and disbursements and costs of investigation, litigation, settlement, judgment, interest, and penalties). Electricsine shall not be liable to you for any claims arising out of any act or omission on the part of the Third-Party Service Provider(s) including, but not limited to, any lost, stolen, or incorrectly processed payments. Electricsine expressly disclaims any responsibility and liability for all services provided by the Third-Party Service Provider(s).</li>
                                    <li>Please note that all Subscription payments are collected by Electricsine only through the Platform and not through any third parties (except Third-Party Service Provider(s)). We do not usually authorize any third party (except Third-Party Service Provider(s)) to collect monies on our behalf, alternatively, you can always check with us by writing to us at email address provided under the ‘Contact for User Support/Queries’ section below.</li>
                                    <li>Further, Electricsine is solely authorized to offer discounts / offers, if any, on the Subscription prices. These discounts / offers are communicated on the Platform or via direct communication to you from electricsine via email, SMS, phone, or such other means of communication, and can be availed only through the Platform. Electricsine shall not be liable for any claims arising from such unauthorized discounts / offers offered by any person (including any third- party platform or Content Provider), other than Electricsine.</li>
                                </ul>
                                <p style={{ ...styles.heading }} id="cancellation-refund">
                                    4. Cancellation and Refund Policy:
                                </p>
                                <p style={styles.subheading}>
                                    You may cancel your Subscription through your account on the Platform. However, please note that the cancellation will become effective at the end of the then-current billing period; in other words, we will not renew your Subscription, but the existing Subscription will continue until the end of its billing period and there shall be no refund of the fee already paid for the same, unless otherwise specified in the Refund Policy. So, please read these terms and conditions and the Refund Policy carefully before purchasing any Subscription.
                                </p>
                                <p style={styles.subheading}>
                                    When you cancel your Subscription, Electricsine may disable access to features made available to you upon your purchase of Subscription, while your account may continue to exist on the Platform.
                                </p>
                                {/* <p style={{ ...styles.heading }}>
                                 Refund Policy of Online Subscriptions:
                                </p>
                                <p style={styles.subheading}>
                                    Please read the subscription terms and conditions carefully before subscribing to any of the subscription plans, as once you have subscribed, you cannot change or cancel your subscription plan. Once you subscribe and make the required payment for any online subscriptions, it shall be final and there cannot be any changes or modifications to the same and neither will there be any refund. Also read carefully Cancellation and Refund Policy.
                                </p> */}
                                <ul style={{ ...styles.subheading }} className="square-list">
                                    <li><h5>Refund Policy of Online Subscriptions -</h5> We strive for customer satisfaction. Our programme or business intended only to access through online. Training materials with simulations and other products are accessed through LOGIN ID and password you received after the online payment. Please read the subscription terms and conditions carefully before subscribing to any of the subscription plans, as once you have subscribed, you cannot change or cancel your subscription plan. Once you subscribe and make the required payment for any online subscriptions, it shall be final and there cannot be any changes or modifications to the same and neither will there be any refund. Also read carefully Cancellation and Refund Policy.</li>
                                </ul>
                                <p style={{ ...styles.heading }} id="shipping-delivery">
                                    5.	Shipping and Delivery:
                                </p>
                                <p style={styles.subheading}>
                                    We do not sell any item through shipping. The product are simulations and online product. We do not sell any item through shipping. As the product is for educational and learning purposes, we deliver the product through our Website (https://www.electricsine.com) and access by streaming against subscription and purchase. So not applicable.                                </p>

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
    },
    underlined: {
        textDecoration: 'underlined'
    }
};