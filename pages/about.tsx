import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'


const Index = () => {
 
  return (
    <>
      <Layout>
        <Head>
          <title>Rodrigo Fraga Blog</title>
        </Head>
        <Container>     
          <div className="text-3xl  font-bold mb-8 text-c_preto border-b-4 border-c_amarelo">Especialista em desenvolvimento Back-End - Tech Lead</div>
          
          <h2 className="text-2xl font-bold mb-8 text-c_preto">Desenvolvedor C# .Net Sênior | Node.JS | Vue.Js | MongoDB | Sql Server | FullStack Developer</h2>
         
          <div>
          <div className="text-c_preto">Tenho atuado nos últimos 12 anos no desenvolvimento do sistema CRM com foco para rede hoteleira, onde atende as maiores redes de hotéis, resorts e parques do Brasil. Um sistema que segmenta grande parte do público hoteleiro do brasil, realizando fluxos de segmentações,  envios de e-mails de campanhas e automatizados, envios de SMS, dashboards em tempo real para os administradores e conexões via API com parceiros. <br/><br/> Nesse tempo muito se evoluiu sobre tecnologia e com isso a demanda por atualização e novos desafios surgiram,  alguns deles como:
          <br/>- Migrar produtos em .Net para APIs em Node.JS,
           <br/>- Revitalizar o front em Asp.Net para  uma PWA em Vue.JS 
           <br/>- Conexão com novos bancos de dados como MongoDB, ClickHouse
           <br/>- Integrar logs de sistema com ElasticSearch
           <br/>- Dentre muitas outras melhorias...
           <br/><br/><br/>Hoje estou complementando minha formação com: 
           <br/>- Pós Graduação em Gestão de Projetos, que parte de um objetivo para definir conhecimentos, habilidades e recursos necessários para a sua concretização. Para tanto, acrescenta nessa equação questões relacionadas ao custo que ela envolve e ao tempo de duração.
           <br/>- MBA em Business Intelligence, visa formar profissionais para atuar como gestor ou analista com foco em Inteligência de Negócios que saibam interpretar dados históricos e analisar tendências, de forma ágil e assertiva, utilizando técnicas, metodologias, processos e ferramentas para subsidiar o processo decisório
           <br/><br/><br/>Principais tecnologias com que trabalho: 
           <br/>- C# .NET <br/>- Node.JS<br/>- React.JS<br/>- MongoDB<br/>- Sql Server DB<br/>- Click House DB<br/><br/>
           <br/><br/>
           </div>

          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
