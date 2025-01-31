import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import correctly

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // Use useNavigate here to get the navigate function

  return (
    <PageContainer>
      <Header>
        <Nav>
          <Logo>QuizMaster</Logo>
          <NavList>
            <NavItem>
              <a href="#">Home</a>
            </NavItem>
            <NavItem>
              <a href="#">About</a>
            </NavItem>
            <NavItem>
              <a href="#">Contact</a>
            </NavItem>
          </NavList>
        </Nav>
      </Header>

      <Section>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Test Your Knowledge
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enhance Your Knowledge By Solving Quiz Into Various Categories!
        </HeroSubtitle>
      </Section>

      <Section>
        <CategoryGrid>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              isSelected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </Section>

      <Section>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quiz")} // Use the navigate function to redirect
        >
          Start Quiz
        </CTAButton>
      </Section>

      <Footer>
        <p>&copy; 2024 QuizMaster. All rights reserved.</p>
      </Footer>
    </PageContainer>
  );
}

const categories = [
  { id: 1, name: "History", icon: "🏛️" },
  { id: 2, name: "Science", icon: "🔬" },
  { id: 3, name: "Literature", icon: "📚" },
  { id: 4, name: "Geography", icon: "🌍" },
  { id: 5, name: "Music", icon: "🎵" },
  { id: 6, name: "Movies", icon: "🎬" },
];



const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #9333ea, #3b82f6);
  color: white;
`;

const Header = styled.header`
  padding: 1.25rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fde047;
    }
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 5rem auto 0;
  text-align: center;
`;

const HeroTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

// ✅ Fix: Use `attrs` instead of TypeScript generic type
const CategoryCard = styled(motion.div).attrs((props) => ({
  style: {
    backgroundColor: props.isSelected ? "#fde047" : "rgba(255, 255, 255, 0.2)",
    color: props.isSelected ? "#6b21a8" : "white",
  },
}))`
  padding: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#fde047" : "rgba(255, 255, 255, 0.3)")};
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const CategoryName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const CTAButton = styled(motion.button)`
  padding: 0.75rem 2rem;
  background-color: #fde047;
  color: #6b21a8;
  border: none;
  border-radius: 9999px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fcd34d;
  }
`;

const Footer = styled.footer`
  margin-top: 5rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  text-align: center;
`;

export default Home;
