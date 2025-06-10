import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I'm",
        description: {
          part1: "Passionate about solving complex problems and optimizing processes. I'm deeply interested in ",
          highlight: "Data Science",
          part2: ", Statistical Analysis and Machine Learning."
        },
        cta: "View my work",
        scroll: "Scroll"
      },
      about: {
        title: "About",
        titleHighlight: "Me",
        subtitle: "Passionate for Data Science",
        paragraph1: "I'm passionate about data science and programming. My journey began with a technical course in Systems Development at the Federal Institute of Paraná, where I built a solid foundation in backend and programming logic, working with technologies like Java, PostgreSQL, and Angular.",
        paragraph2: "During my Engineering degree, I deepened my knowledge in statistics, signal processing, and data analysis, participating in projects that integrated electronics and Python for real-time data collection and interpretation.",
        paragraph3: "Currently, I work with APIs for integration and data collection between different platforms, focusing on response automation and improving technical response time. I hope to continue evolving in the data field, combining my technical background with curiosity and the continuous desire to learn and solve complex challenges.",
        getInTouch: "Get in Touch",
        downloadCV: "Download CV",
        skills: {
          dataAnalysis: {
            title: "Data Analysis",
            description: "Transform raw data into relevant insights, guiding strategic decisions."
          },
          consulting: {
            title: "Technical Consulting",
            description: "Provide specialized technical guidance and strategic solutions for complex problems."
          },
          automation: {
            title: "Process Automation",
            description: "Develop automated solutions to optimize workflows and increase efficiency."
          }
        }
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contato"
      },
      hero: {
        greeting: "Olá, eu sou",
        description: {
          part1: "Apaixonado por resolver problemas complexos e otimizar processos. Tenho grande interesse em ",
          highlight: "Ciência de Dados",
          part2: ", Análise Estatística e Machine Learning."
        },
        cta: "Ver meus trabalhos",
        scroll: "Rolar"
      },
      about: {
        title: "Sobre",
        titleHighlight: "Mim",
        subtitle: "Apaixonado por Ciência de Dados",
        paragraph1: "Sou apaixonado por ciência de dados e programação. Minha jornada começou com o curso técnico em Desenvolvimento de Sistemas pelo Instituto Federal do Paraná, onde construí uma base sólida em backend e lógica de programação, trabalhando com tecnologias como Java, PostgreSQL e Angular.",
        paragraph2: "Durante a graduação em Engenharia, aprofundei meus conhecimentos em estatística, tratamento de sinais e análise de dados, participando de projetos que integraram eletrônica e Python para coleta e interpretação de dados em tempo real.",
        paragraph3: "Atualmente, atuo na utilização de APIs para integração e coleta de dados entre diferentes plataformas, com foco na automação de respostas e na melhoria do tempo de resposta técnica. Espero continuar evoluindo na área de dados, unindo minha bagagem técnica à curiosidade e ao desejo contínuo de aprender e resolver desafios complexos.",
        getInTouch: "Entre em Contato",
        downloadCV: "Baixar CV",
        skills: {
          dataAnalysis: {
            title: "Análise de Dados",
            description: "Transformo dados brutos em insights relevantes, orientando decisões estratégicas."
          },
          consulting: {
            title: "Consultoria Técnica",
            description: "Forneço orientação técnica especializada e soluções estratégicas para problemas complexos."
          },
          automation: {
            title: "Automação de Processos",
            description: "Desenvolvo soluções automatizadas para otimizar fluxos de trabalho e aumentar a eficiência."
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;