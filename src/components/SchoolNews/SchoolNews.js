import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleImage, Articles, Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';

const DATO_TOKEN = '2b0a580c34ced15932a0d9ef47e000';

const SchoolNews = () => {

  useEffect(()=>{
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query: '{allArticles {titel}}'
      })
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
  })

  return (
      <Wrapper>
        <Title>Schülerzeitung</Title>
        <Articles>
          <Article>
            <ArticleImage>
              <img src="https://picsum.photos/250/250" />
            </ArticleImage>
            <div>
              <h3>Wymiana komputerów</h3>
              <p>Już niebawem w sali informatycznej 118
                pojawi się kilka nowych urządzeń!</p>
            </div>
          </Article>
          <Article>
            <ArticleImage>
              <img src="https://picsum.photos/250/250" />
            </ArticleImage>
            <div>
              <h3>Wymiana komputerów</h3>
              <p>Już niebawem w sali informatycznej 118
                pojawi się kilka nowych urządzeń!</p>
            </div>
          </Article>
          <Article>
            <ArticleImage>
              <img src="https://picsum.photos/250/250" />
            </ArticleImage>
            <div>
              <h3>Wymiana komputerów</h3>
              <p>Już niebawem w sali informatycznej 118
                pojawi się kilka nowych urządzeń!</p>
            </div>
          </Article>
        </Articles>
      </Wrapper>
  );
}

SchoolNews.propTypes = {};

export default SchoolNews;
