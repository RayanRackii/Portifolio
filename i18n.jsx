import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I'm",
        description: {
          part1:
            "I enjoy solving complex challenges and finding efficient solutions. I'm especially interested in ",
          highlight: "Data Science",
          part2: ", Full-Stack Development and Machine Learning.",
        },
        cta: "View my work",
        scroll: "Scroll",
      },
      about: {
        title: "About",
        titleHighlight: "Me",
        subtitle: "Passionate for Data Science",
        paragraph1:
          "I'm passionate about data science and programming. My journey began with a technical course in Systems Development at the Federal Institute of Paraná, where I built a solid foundation in backend and programming logic, working with technologies like Java, PostgreSQL, and Angular.",
        paragraph2:
          "During my Engineering degree, I deepened my knowledge in programming, statistics and data analysis, participating in projects that integrated electronics and Python for real-time data collection and interpretation.",
        paragraph3:
          "Currently, I work with APIs for integration and data collection between different platforms, focusing on response automation and improving technical response time. I'm focused on growing professionally in programming, combining my technical background with curiosity and the continuous desire to learn and solve complex challenges.",
        getInTouch: "Get in Touch",
        downloadCV: "Download Resume",
        skills: {
          dataAnalysis: {
            title: "Data Analysis",
            description:
              "Transform raw data into relevant insights, guiding strategic decisions.",
          },
          consulting: {
            title: "Continuous Professional Development",
            description:
              "I work to continuously grow as a developer by exploring new technologies and improving my skills.",
          },
          automation: {
            title: "Process Automation",
            description:
              "Develop automated solutions to optimize workflows and increase efficiency of the team.",
          },
        },
      },
      skills: {
        Title: "My",
        titleHighlight: "Skills",
        tooltip:
          `0% to 25% - Able to perform the task, but with difficulties.<br />"
          26% to 50% - Able to perform the task, but with some difficulty.<br />
          51% to 75% - Able to perform the task easily.<br />
          76% to 100% - Able to perform the task with mastery.`,
      },
      project: {
        title: "Featured",
        titleHighlight: "Projects",
        subtitle:
          "Here I present some of the projects I have completed, those I am currently working on, and those I plan to develop.",
        git: "Checkout my GitHub",
        project1:{
          title: "Data Analysis from TOP 100 Brazilian Youtubers from 2024",
          description: "A project that explores data from the 2024 database of Brazil's top YouTubers, featuring details such as channel name, subscriber count, video count, creation date, and description."
        }
      },
      contact: {
        title: "Get in",
        titleHighlight: "Touch",
        subTitle: "Contact Information",
        location: "Location",
        phone: "Phone",
        text: "I'm always open to new opportunities and collaborations. If you want to discuss a project, ask a question, or just chat, feel free to reach out to me.",
      },
    },
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contato",
      },
      hero: {
        greeting: "Olá, eu sou",
        description: {
          part1:
            "Gosto de enfrentar desafios complexos e encontrar soluções eficientes. Me interesso especialmente por ",
          highlight: "Ciência de Dados",
          part2: ", Desenvolvimento Full-Stack e Aprendizado de Máquina.",
        },
        cta: "Ver meus trabalhos",
        scroll: "Rolar",
      },
      about: {
        title: "Sobre",
        titleHighlight: "Mim",
        subtitle: "Impulsionado por Dados",
        paragraph1:
          "Sou apaixonado por ciência de dados e programação. Minha jornada começou com o curso técnico em Desenvolvimento de Sistemas pelo Instituto Federal do Paraná, onde construí uma base sólida em backend e lógica de programação, trabalhando com tecnologias como Java, PostgreSQL e Angular.",
        paragraph2:
          "Durante a graduação em Engenharia, aprofundei meus conhecimentos em estatística, tratamento de sinais e análise de dados, participando de projetos que integraram eletrônica e Python para coleta e interpretação de dados em tempo real.",
        paragraph3:
          "Atualmente, atuo na utilização de APIs para integração e coleta de dados entre diferentes plataformas, com foco na automação de respostas e na melhoria do tempo de resposta técnica. Estou focado em crescer profissionalmente na área de programação, unindo minha bagagem técnica à curiosidade e ao desejo contínuo de aprender e resolver desafios complexos.",
        getInTouch: "Entre em Contato",
        downloadCV: "Baixar currículo",
        skills: {
          dataAnalysis: {
            title: "Análise de Dados",
            description:
              "Transformo dados brutos em insights relevantes, orientando decisões estratégicas.",
          },
          consulting: {
            title: "Desenvolvimento Profissional Contínuo",
            description:
              "Busco evoluir continuamente como desenvolvedor, explorando novas tecnologias e aprimorando minhas habilidades.",
          },
          automation: {
            title: "Automação de Processos",
            description:
              "Desenvolvo soluções automatizadas para otimizar fluxos de trabalho e aumentar a eficiência da equipe.",
          },
        },
      },
      skills: {
        Title: "Minhas",
        titleHighlight: "Habilidades",
        tooltip:
          `0% a 25% - É possível realizar a tarefa, mas com dificuldades.<br />
          26% a 50% - É possível realizar a tarefa, mas com desempenho reduzido.<br />
          51% a 75% - É possível realizar a tarefa com facilidade.<br />
          76% a 100% - É possível realizar a tarefa com maestria.`,
      },
      project: {
        title: "Projetos",
        titleHighlight: "Destaque",
        subtitle:
          "Aqui apresento alguns dos projetos que já realizei, os que estou desenvolvendo atualmente e os que planejo criar.",
        git:
          "Acesse meu GitHub",
         project1:{
          title: "Análise de Dados dos 100 Maiores YouTubers Brasileiros de 2024",
          description: "Projeto que explora os dados dos 100 maiores YouTubers brasileiros de 2024, com informações como nome do canal, número de inscritos, quantidade de vídeos, data de criação e descrição do canal.",
        }
      },
      contact: {
        title: "Entre em",
        titleHighlight: "Contato",
        subTitle: "Informações de Contato",
        location: "Localização",
        phone: "Telefone",
        text: "Estou sempre aberto a novas oportunidades e colaborações. Se você deseja discutir um projeto, fazer uma pergunta ou apenas conversar, sinta-se à vontade para entrar em contato comigo.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // Default to Portuguese if no language is set
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
