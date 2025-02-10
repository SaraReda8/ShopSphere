import React from 'react';
import styles from './Team.module.css';

import member1Img from '../../Assets/images/Member1.webp';
import member2Img from '../../Assets/images/Member2.webp';
import member3Img from '../../Assets/images/Member3.webp';
import member4Img from '../../Assets/images/Member4.webp';
import member5Img from '../../Assets/images/Member5.webp';
import member6Img from '../../Assets/images/Member6.webp';

export default function Team() {
  const teamMembers = [
    {
      name: 'Lina Ahmed',
      role: 'CEO',
      responsibility: 'Oversees the overall strategy, vision, and growth of ShopSphere, ensuring all departments align with business goals.',
      image: member1Img,
    },
    {
      name: 'Dema Osman',
      role: 'Lead Developer',
      responsibility: 'Leads the development team to build and maintain the ShopSphere platform, ensuring smooth functionality, security, and scalability.',
      image: member2Img,
    },
    {
      name: 'Kariman Farouk',
      role: 'Marketing Director',
      responsibility: 'Develops and implements marketing strategies to drive online traffic, improve conversion rates, and increase customer retention through various digital channels.',
      image: member3Img,
    },
    {
      name: 'Wael Mohamed',
      role: 'Product Manager',
      responsibility: 'Manages the product lifecycle, ensuring that product offerings meet customer needs, working with suppliers, and coordinating the team to launch new products.',
      image: member4Img,
    },
    {
      name: 'Dalia Eissa',
      role: 'Lead Designer',
      responsibility: 'Designs the user interface and user experience of the ShopSphere platform, ensuring an intuitive, visually appealing, and seamless shopping experience.',
      image: member5Img,
    },
    {
      name: 'Helal Mostafa',
      role: 'Customer Support Manager',
      responsibility: 'Leads the customer support team, handling inquiries, resolving issues, and ensuring a smooth customer experience throughout the buying process.',
      image: member6Img,
    },
  ];
  
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className={`${styles.profileImage} ${styles.fadeIn}`}
            />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberResponsibility}>{member.responsibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
