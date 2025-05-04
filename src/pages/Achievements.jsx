import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css'; // style separately

const achievements = [
  {
    title: "The Keystone Achievement: FemTech",
    description: "Winners of the FemTech Hackathon 2025 at the University of Glasgow. Team NovaHealZ started the path on a wonderful note!",
  },
  {
    title: "Defining Moment: EIBF Funding",
    description: "Received first funding from EIBF (Engineers in Business Fellowship), fueling our passion for innovation and entrepreneurship.",
  },
  {
    title: "Cultivating the Future: University Microfinance Event",
    description: "CEO Akash and CCO Leanne represented NovaHealZ at the Microfinance Event 2025 in Heriot-Watt University, supported by the Scottish Government. Leanne’s 1-min pitch was highly praised!",
  },
  {
    title: "Visionary Achievement: iBioIC",
    description: "Coming soon.",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section">
      <h2 className="section-title">Impactful Projects & Deliverables</h2>
      <div className="timeline-container">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="line-circle" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
