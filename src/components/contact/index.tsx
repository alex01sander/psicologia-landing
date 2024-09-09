import React, { useEffect, useRef } from 'react';
import { Section, Content, ContactForm, Input, Textarea, Button, SocialLinks, SocialLink, SocialIcon, Container } from './styles';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registrar o plugin

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação para o formulário
    gsap.fromTo(
      formRef.current,
      { y: 100, opacity: 0 }, // Começa 100px abaixo e invisível
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%', // Inicia quando o topo do elemento atinge 80% da tela
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animação para os links de redes sociais
    gsap.fromTo(
      socialLinksRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Section id="contact">
      <Content>
        <h2>Contato</h2>
        <p>Entre em contato conosco para agendar uma consulta ou tirar dúvidas.</p>
        <Container>
          <ContactForm ref={formRef}>
            <Input type="text" placeholder="Seu nome" required />
            <Input type="email" placeholder="Seu e-mail" required />
            <Textarea placeholder="Sua mensagem" required></Textarea>
            <Button type="submit">Enviar</Button>
          </ContactForm>
          <SocialLinks ref={socialLinksRef}>
            <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon><FaFacebookF /></SocialIcon>
              Facebook
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon><FaTwitter /></SocialIcon>
              Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon><FaInstagram /></SocialIcon>
              Instagram
            </SocialLink>
          </SocialLinks>
        </Container>
      </Content>
    </Section>
  );
};

export default Contact;
