// import React from "react";
// import styles from "./Reviews.module.css";

// // Importing images
// import client1 from "../../Assets/Images/client-1.webp";
// import client2 from "../../Assets/Images/client-1.webp";
// import client3 from "../../Assets/Images/client-1.webp";
// import client4 from "../../Assets/Images/client-1.webp";
// import client5 from "../../Assets/Images/client-1.webp";

// export default function Reviews() {
//   const reviews = [
//     {
//       name: "Ahmed Mostafa",
//       rating: "⭐⭐⭐⭐⭐",
//       review: "I love shopping here! The product variety is incredible, and I always find exactly what I need. Delivery is always on time, and the customer service team is so friendly. Highly recommended!",
//       image: client1,
//     },
//     {
//       name: "Farah Mahmoud",
//       rating: "⭐⭐⭐⭐",
//       review: "The quality of the products exceeded my expectations, especially the fashion items! The only reason I gave 4 stars is that I had to wait an extra day for delivery, but the team kept me updated, so it wasn’t a big issue.",
//       image: client2,
//     },
//     {
//       name: "Omar Ehab",
//       rating: "⭐⭐⭐⭐⭐",
//       review: "Excellent platform! I ordered groceries, and everything was fresh and carefully packed. It saved me so much time. I’ll definitely be a regular customer. Keep up the great work!",
//       image: client3,
//     },
//     {
//       name: "Nourhan Ali",
//       rating: "⭐⭐⭐⭐⭐",
//       review: "I bought a leather handbag, and I was amazed by the quality! The stitching is perfect, and the material feels premium. It looks even better in real life than in the pictures. I’m in love with it!",
//       image: client4,
//     },
//     {
//       name: "Karim Hossam",
//       rating: "⭐⭐⭐⭐⭐",
//       review: "The smartphone I purchased works flawlessly. It came sealed and brand new with all the promised accessories. The battery life and camera are outstanding. Worth every pound!",
//       image: client5,
//     },
//     {
//       name: "Dina Youssef",
//       rating: "⭐⭐⭐⭐⭐",
//       review: "I bought some skincare products, and they’re amazing! My skin feels so much smoother and hydrated after just a few uses. The natural ingredients make it even better. Highly recommended!",
//       image: client2,
//     },
//   ];

//   return (
//     <section className={styles.reviewsSection}>
//       <h2 className={styles.heading}>What Our Customers Say</h2>
//       <div className={styles.reviewsContainer}>
//         {reviews.map((review, index) => (
//           <div key={index} className={styles.reviewCard}>
//             <img src={review.image} alt={`${review.name}'s profile`} className={styles.profileImage} />
//             <h3 className={styles.name}>{review.name}</h3>
//             <p className={styles.rating}>{review.rating}</p>
//             <p className={styles.comment}>{review.review}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
