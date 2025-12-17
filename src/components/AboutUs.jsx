import React from "react";
//import greenImage from "../assets/Images/restaurant.png";
import coffeeImage from "../assets/Images/cofee.jpg";
import newImage from "../assets/Images/out.jpg";
//import { Link } from "react-router-dom";

const AboutUs = () => {
  // Inline styles (Option B)
  const styles = {
    about: {
      padding: "100px 0",
      backgroundColor: "#f3efe8", // warm subtle background for About section
      position: "relative",
      overflow: "hidden",
      width: "100%",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    sectionHeader: {
      textAlign: "center",
      marginBottom: "80px",
    },
    sectionTitle: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "20px",
      letterSpacing: "-0.5px",
    },
    accentText: {
      color: "#d4af37",
      position: "relative",
    },
    sectionDivider: {
      width: "80px",
      height: "3px",
      background: "linear-gradient(to right, #d4af37, #f4e4a3)",
      margin: "0 auto 25px",
      borderRadius: "2px",
    },
    sectionSubtitle: {
      fontSize: "1.2rem",
      color: "#666",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    aboutContent: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
    },
    aboutText: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },
    aboutDescription: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#444",
      marginBottom: "25px",
    },
    fontSemibold: {
      fontWeight: "600",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
    },
    featureItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "15px",
      padding: "20px",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      backgroundColor: "white",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    },
    featureIcon: {
      fontSize: "2rem",
      flexShrink: "0",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #d4af37, #f4e4a3)",
      borderRadius: "50%",
      boxShadow: "0 4px 10px rgba(212, 175, 55, 0.3)",
    },
    featureContent: {
      flex: "1",
    },
    featureTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#1a1a1a",
      marginBottom: "8px",
    },
    featureDescription: {
      color: "#666",
      lineHeight: "1.5",
    },
    aboutImage: {
      position: "relative",
    },
    imageContainer: {
      position: "relative",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    },
    image: {
      width: "100%",
      height: "500px",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.5s ease",
    },
    imageBadge: {
      position: "absolute",
      bottom: "30px",
      left: "30px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      zIndex: "2",
      maxWidth: "280px",
      backdropFilter: "blur(10px)",
      borderLeft: "4px solid #d4af37",
    },
    imageBadgeTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#1a1a1a",
      marginBottom: "8px",
    },
    imageBadgeText: {
      color: "#666",
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
  };

  return (
    <section id="about" className="about show" style={styles.about}>
      <div className="container" style={styles.container}>
        <div className="section-header" style={styles.sectionHeader}>
          <h2 className="section-title" style={styles.sectionTitle}>
            About <span style={styles.accentText}>Canoe</span>
          </h2>
          <div className="section-divider" style={styles.sectionDivider}></div>
          <p className="section-subtitle" style={styles.sectionSubtitle}>
            Where culinary excellence meets timeless elegance
          </p>
        </div>

        <div className="about-content" style={styles.aboutContent}>
          <div className="about-text" style={styles.aboutText}>
            <div className="about-description">
              <p style={styles.aboutDescription}>
                At{" "}
                <span style={{ ...styles.accentText, ...styles.fontSemibold }}>
                  Canoe
                </span>
                , we believe that exceptional dining is an art form that brings
                people together. Our commitment to culinary excellence and warm
                hospitality creates an atmosphere where every meal becomes a
                memorable experience.
              </p>

              <p style={styles.aboutDescription}>
                Founded with a vision to blend contemporary cuisine with
                timeless elegance, Canoee has become a destination for those who
                appreciate the finer things in life. Our carefully curated menu
                features signature dishes that showcase the perfect harmony of
                flavors, textures, and presentation.
              </p>
            </div>

            <div className="features-grid" style={styles.featuresGrid}>
              <div className="feature-item" style={styles.featureItem}>
                <div className="feature-icon" style={styles.featureIcon}>
                  🍽️
                </div>
                <div className="feature-content" style={styles.featureContent}>
                  <h3 className="feature-title" style={styles.featureTitle}>
                    Signature Dishes
                  </h3>
                  <p
                    className="feature-description"
                    style={styles.featureDescription}
                  >
                    Handcrafted culinary masterpieces
                  </p>
                </div>
              </div>

              <div className="feature-item" style={styles.featureItem}>
                <div className="feature-icon" style={styles.featureIcon}>
                  🌿
                </div>
                <div className="feature-content" style={styles.featureContent}>
                  <h3 className="feature-title" style={styles.featureTitle}>
                    Fresh Ingredients
                  </h3>
                  <p
                    className="feature-description"
                    style={styles.featureDescription}
                  >
                    Locally sourced, premium quality
                  </p>
                </div>
              </div>

              <div className="feature-item" style={styles.featureItem}>
                <div className="feature-icon" style={styles.featureIcon}>
                  👨‍🍳
                </div>
                <div className="feature-content" style={styles.featureContent}>
                  <h3 className="feature-title" style={styles.featureTitle}>
                    Expert Chefs
                  </h3>
                  <p
                    className="feature-description"
                    style={styles.featureDescription}
                  >
                    Award-winning culinary team
                  </p>
                </div>
              </div>

              <div className="feature-item" style={styles.featureItem}>
                <div className="feature-icon" style={styles.featureIcon}>
                  🍷
                </div>
                <div className="feature-content" style={styles.featureContent}>
                  <h3 className="feature-title" style={styles.featureTitle}>
                    Fine Wine
                  </h3>
                  <p
                    className="feature-description"
                    style={styles.featureDescription}
                  >
                    Curated selection of premium wines
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image" style={styles.aboutImage}>
            <div className="image-container" style={styles.imageContainer}>
              <img
                src={newImage}
                alt="Elegant restaurant dining experience"
                style={styles.image}
              />
              {/* image badge removed per user request */}
            </div>
          </div>
        </div>

        {/* Coffee Spot (kept as the sole additional section) */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              display: "flex",
              gap: 28,
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              padding: 24,
              borderRadius: 12,
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              flexWrap: "wrap-reverse",
              flexDirection: "row-reverse",
            }}
          >
            <img
              src={coffeeImage}
              alt="Coffee Spot"
              style={{
                width: 420,
                height: 260,
                objectFit: "cover",
                borderRadius: 10,
                flex: "0 0 420px",
              }}
            />
            <div style={{ flex: "1 1 300px", minWidth: 220 }}>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
                Our Coffee Spot
              </h3>
              <p style={{ marginTop: 12, color: "#666", lineHeight: 1.6 }}>
                Mornings at Canoe are slow and intentional. Our Coffee Spot
                features a refined espresso program and specialty brews,
                prepared by a barista team who care about origin, roast and
                technique. Stop by for a pastry and a thoughtfully pulled shot.
              </p>
            </div>
          </div>
        </div>

        {/* Come refresh CTA */}
        <div style={{ marginTop: 56 }}>
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              borderRadius: 12,
              background: "linear-gradient(90deg,#f7faf9,#ffffff)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 800,
                color: "#111827",
              }}
            >
              Come refresh at Canoe
            </h3>
            <p
              style={{
                marginTop: 12,
                color: "#4b5563",
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              }}
            >
              Visit us to reconnect over thoughtfully prepared dishes and a
              refined coffee program — an inviting space to pause, savor, and
              refresh.
            </p>
            <div style={{ marginTop: 18 }}>
              <a
                href="/book-order"
                className="interactive"
                style={{
                  display: "inline-block",
                  background: "#0f766e",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Reserve a table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery removed per user request; only Coffee Spot remains

export default AboutUs;
