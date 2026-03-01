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
    title: "Empowering Innovation: Converge Regional & National Training",
  description: "Elanthendral, Mrinal, and Leanne proudly represented NovaHealZ at the Converge Regional and National Training sessions, fostering new strategies for growth and collaboration."
  },
  {
    title: "Innovation At Its Scale: Converge Kickstart Finalist",
    description: "On 2 October 2025, NovaHealZ was represented by founder Akash Pande Rajeshkumar and Leanne Fernandes at an invitation-only celebration of university-led innovation held at Prestonfield House Hotel, Edinburgh. The event brought together leaders from the Scottish Government, academia, and industry to recognise academic founders driving research-led societal impact."
  }
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
