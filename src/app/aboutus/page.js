import { Header } from "@/components/sharables/Header";
import Grid from "@mui/material/Grid2";
import React from "react";
import { text } from "stream/consumers";
export default function Home() {
    return (
        <div style={{ backgroundColor: 'white !important', height: '100vh !important' }}>
            <Header />
            <Grid container style={{ justifyContent: 'center', backgroundColor: 'white !important' }} className="light_bg">
                <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>

                    <div style={{ ...styles.fullwidth }}>
                        <div style={{ ...styles.center, ...styles.fullwidth }}>

                            <h1
                                style={{
                                    ...styles.mainsubhead,
                                    ...styles.aboutheadpadding,
                                    // ...styles.pt3,
                                    // ...styles.aboutHead,
                                }}
                            >
                                About Us
                            </h1>
                        </div>
                        <div style={{ ...styles.center, ...styles.fullwidth, ...styles.column, ...styles.alignCenter }}>
                            <Grid item size={{ xs: 11, md: 10, lg: 10, sm: 11 }}
                                style={{ ...styles.center, ...styles.column, ...styles.alignCenter }}>
                                <p style={styles.subheading}>
                                  { ` Our online training platform, Electricsine, is more than just a collection of courses;
                                    it's a comprehensive resource designed to provide a
                                    deep understanding of electrical engineering, electronics engineering,
                                    and instrumentation. The importance of this training lies in its ability
                                    to bridge the gap between theoretical knowledge and real-world application,
                                    making you highly competitive in the job market.`}
                                </p>
                                <p style={styles.subheading}>
                                    Our platform is a one-stop solution for anyone serious about
                                    mastering electrical, electronics, and instrumentation
                                    engineering. We provide more than just course material;
                                    we offer a comprehensive, career-focused learning experience.
                                    Our content is meticulously structured to serve the diverse
                                    needs of students, professionals, and job seekers.
                                </p>
                                <p style={{ ...styles.heading }} id="subscription">
                                    Master Your Electrical & Electronics Exams
                                </p>
                                <p style={styles.subheading}>
                                    Master the world of electrical and electronics engineering with our comprehensive platform. We offer thousands of objective questions and MCQs to help you ace competitive exams like GATE, IES, UPSC, and any competitive examination or job interviews. Our detailed answers and explanations ensure you understand every concept, making us your ultimate resource for success.
                                </p>
                                <p style={{ ...styles.heading }} id="subscription">
                                    Built by Engineers, for Engineers
                                </p>
                                <p style={styles.subheading}>
                                {    `We're a team of experienced electrical and electronics engineers who've been in your shoes. We understand the challenges of competitive exams, the pressure of job interviews, and the need to truly grasp concepts like circuit theory, digital logic, Basic electricity and power systems.
                               ` }</p>
                                <p style={{ ...styles.heading }} id="subscription">
                                    Why Our Platform Works
                                </p>
                                <p style={styles.subheading}>
                                 {`   We don't believe in simple memorization. Our platform is intelligently designed for true knowledge development, helping you go beyond just answering questions. We go beyond random questions by structuring your practice sessions for maximum effectiveness in Electrical, Electronics, Communication and Instrumentation engineering. To reduce test anxiety and improve time management, our platform closely simulates the real exam environment.
                                `}</p>

                                <p style={styles.subheading}>
                                    <strong>Solved Question Papers:</strong>  This is a key differentiator. Providing solved papers helps users understand the structure of exams and the types of questions asked. This practice is crucial for building confidence and improving problem-solving speed, which is essential for timed tests and interviews for Electrical, Electronics, Communication and Instrumentation engineering.
                                </p>

                                <p style={styles.subheading}>
                                    <strong>Objective Type Questions & MCQs:</strong>  {`This is a vital component for a variety of users. For students, it's a tool for preparing for entrance exams and internal assessments. For job seekers, it's a primary resource for interview preparation, as many companies use these types of questions to screen candidates. The importance of this section cannot be overstated; it is a direct path to improving test-taking skills and knowledge recall in Electrical, Electronics, Communication and Instrumentation engineering.                                `}</p>

                                <p style={styles.subheading}>
                                    <strong>Industry-Relevant Know-How:</strong>   This content goes beyond academic theory. It includes practical applications, case studies, and insights into the latest technologies like AI and automation. This knowledge is what separates an academic from a competent professional and is essential for anyone seeking to be successful in the field.
                                </p>

                                <p style={styles.subheading}>
                                    <strong>Mock Tests: </strong>{`Take full-length mock tests to get a feel for the exam's format and difficulty, which is crucial for competitive exams for Diploma, B.Tech, GATE, or IES in Electrical, Electronics, Communication and Instrumentation engineering.`} 
                                     </p>

                                <p style={styles.subheading}>
                                    <strong>Topic-Wise Practice:</strong> Focus on one topic at a time, such as Basic Electrical & Electronics, Electrical Power Systems & Electrical Machines, Industrial Instrumentation, Digital & Analog Electronics or control systems, to reinforce specific concepts.
                                </p>
                                <p style={styles.subheading}>
                                    <strong>Active Recall:</strong> Our training platform uses active recall, encouraging you to quiz yourself and explain concepts. This is far more effective than just reading notes.
                                </p>
                                <p style={styles.subheading}>
                                    <strong>Learn from Mistakes:</strong> Every incorrect answer is a learning opportunity. We provide detailed explanations and highlight the core concepts behind each question, helping you identify and fix your weak areas.
                                </p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>Set a Timer:</strong> Practice with a strict time limit to train yourself to think and answer quickly.
                                    Importance of This Study

                                </p>
                                <p style={styles.subheading}>
                                    <strong>For Diploma, Undergraduate & Postgraduate students:</strong> This study is crucial for solidifying foundational concepts learned in college. University curricula often focus on theory, but our platform provides the practical, hands-on knowledge needed to excel in Electrical, Electronics, Communication and Instrumentation engineering. By studying solved question papers and objective type questions, students can prepare effectively for university exams and gain an edge over their peers. The multiple choice questions (MCQs) specifically help them master concepts for competitive examinations.
                                </p>
                                <p style={styles.subheading}>
                                    <strong>For Technologists and Working Professionals:</strong> Electrical, Electronics, Communication and Instrumentation engineering field of engineering is constantly evolving. Staying current with new technologies, trends, and applications is vital for career advancement. This courses offer an accessible way to upskill without the constraints of a traditional classroom. For example, a professional in instrumentation can take a course on the latest sensors, while a technologist in electronics can learn about new embedded systems. This continuous learning is critical for maintaining professional relevance and earning promotions.
                                </p>
                                <p style={styles.subheading}>
                                    <strong>For Job Seekers:</strong> The job market is highly competitive. Employers seek candidates who not only have a strong academic background but also possess practical skills and a deep understanding of industry-relevant concepts. Our platform is a powerful tool for interview preparation for Electrical and Interview preparation for Electronics. The electronics questions and electrical objective questions are specifically designed to test knowledge that employers look for. By studying these materials, job seekers can demonstrate competence and confidence, significantly increasing their chances of landing their desired job.
                                </p>

                                <p style={{ ...styles.heading }} id="subscription">
                                    1. Comprehensive Content
                                </p>
                                <p style={styles.subheading}>
                                    Our library covers a wide spectrum of engineering branches, ensuring you have access to a complete and integrated knowledge base. We go beyond the basics to include specialized topics, giving you a holistic view of the field.
                                </p>

                                <p style={styles.subheading}>
                                    <strong> Electrical Engineering:</strong>
{`                                    Dive deep into foundational topics like DC/AC circuit analysis, power systems, electrical machines, and high voltage technology. Our content simplifies complex concepts, making them accessible whether you're a student building a foundation or a professional seeking to refresh your knowledge.
`}                                </p>
                                <p style={styles.subheading}>
                                    <strong>Electronics Engineering:</strong> Master the core principles of digital and analog electronics, microcontrollers, and embedded systems. Our modules are designed to give you the practical skills needed to design, analyze, and troubleshoot electronic circuits.
                                </p>
                                <p style={styles.subheading}>
                                    <strong>Electronics Communication:</strong> In this topic, we cover transmission, reception, processing of information using electronic circuits and systems, Transmitter, modulation, FM, AM, Receiver, demodulation, Signal, Attenuation, Bandwidth, Analog Communication, Digital Communication, Radio and television transmission.
                                </p>

                                <p style={styles.subheading}>
                                    <strong>Instrumentation:</strong> Explore specialized fields like industrial automation, process control, and sensors & transducers. Understand how these systems integrate in real-world applications, from manufacturing plants to smart devices.
                                </p>

                                <p style={{ ...styles.heading }} id="subscription">
                                    2. Study Materials & Interview Preparation
                                </p>
                                <p style={styles.subheading}>
                                   {` We understand that success in engineering is not just about knowledge; it's about applying it effectively in exams and interviews. Our platform provides the essential tools to help you succeed.`}</p>
                                <p style={styles.subheading}>
                                    <strong>Objective Type Questions & Multiple Choice Questions (MCQs):</strong> Our extensive question banks are a cornerstone of our study material. With thousands of objective type electrical questions and electronics questions, instrumentation questions you can practice and test your knowledge. This is crucial for exam preparation, helping you improve your speed and accuracy. Many companies use these formats for initial screening, so mastering them is a direct path to the next stage of your career.
                                </p>
                                <p style={styles.subheading}>
                                    <strong>Interview Preparation Modules:</strong> Get ready for your dream job with our specialized content for Interview preparation for Electrical, Interview preparation for Electronics and instrumentation questions. Our modules include common technical questions, detailed answers, and tips on how to articulate your knowledge confidently. We focus on topics that recruiters and hiring managers value most, ensuring you are fully prepared to impress.
                                </p>
                                <p style={{ ...styles.heading }} id="subscription">
                                    3. Industry-Relevant Additions
                                </p>
                                <p style={styles.subheading}>
                                    By focusing on these core areas, Electricsine equips you with a powerful combination of theoretical knowledge, practical skills, and exam-readiness, setting you up for a successful career in engineering. Our topic covers:
                                </p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>1. Basic Electrical Engineering</strong>
                                </p>
                                <p style={styles.subheading}>
                                   {` Master basic electrical engineering and network theory with foundational topics: Ohm's Law MCQs with answers, Kirchhoff's Laws, AC/DC circuits, resonance, electromagnetics, semiconductors, and amplifiers. Perfect for GATE Electrical Engineering MCQs, IES Electronics Objective Questions, UPSC Engineering Services Electrical MCQs, and interview preparation for electrical engineers.`}
                                </p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>2. Electrical Machines & Power Systems Engineering</strong>
                                </p>
                                <p style={styles.subheading}>Deep dive into power systems engineering, electrical machines, switch gears and circuit breakers, and power system protection engineering. Topics include transformers, motors, synchronous machines, transmission lines, fault analysis, load flow, and electrical protection engineering. Crucial for competitive exams, industrial jobs, and electrical safety objective questions.</p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>3. Industrial Instrumentation & Control Systems</strong>
                                </p>
                                <p style={styles.subheading}>Specialized knowledge for industrial instrumentation and control systems, including Oil & Gas and manufacturing applications. Topics: PLCs, SCADA, sensors, process control, calibration, and monitoring industrial parameters. Ideal for electronics engineering for competitive exams and interview preparation for electronics engineers.</p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>4. Digital & Analog Electronics</strong>
                                </p>
                                <p style={styles.subheading}>Learn digital electronics, analog electronics, electronic devices, and microcontrollers. Topics include logic gates, flip-flops, counters, diodes, transistors, oscillators, op-amps, amplifiers, ADC/DAC. Perfect for multiple choice questions for electronics and communication engineering and electronics interview preparation.</p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>5. Power Electronics & Advanced Control Systems</strong>
                                </p>
                                <p style={styles.subheading}>Explore power electronics and advanced control systems, including rectifiers, inverters, choppers, converters, stability analysis, PID controllers, state-space, and frequency response. Prepares you for GATE Electrical Engineering MCQs, industrial automation interviews, and practical applications in renewable energy and robotics.</p>
                                <p style={{ ...styles.subheading, ...styles.fullwidth, ...styles.leftalign }}>
                                    <strong>6. Electronics & Communication Engineering</strong>
                                </p>
                                <p style={styles.subheading}>
                                    Prepare for objective type electronics questions in communications and signal processing. Topics: modulation/demodulation, antennas, transmission lines, analog & digital communication, noise analysis. Covers electronics engineering for competitive exams, UPSC Engineering Services Electrical MCQs, and strengthens interview preparation for electronics engineers.
                                </p>
                            </Grid>

                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}
const styles = {
    leftalign: { textAlign: 'left !important' },
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
    fullwidth: { width: "100%" },
    contentleft: {
        display: 'flex',
        justifyContent: 'left'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
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
    heading: {
        fontSize: "20px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontWeight: 600,
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
};