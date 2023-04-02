import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleImage, Articles, Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';

const DATO_TOKEN = '2b0a580c34ced15932a0d9ef47e000';

const SchoolNews = () => {
const [articles, setArticles] = useState([]);

  useEffect(()=>{
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query: '{\n' +
            '  allArticles{\n' +
            '    titel\n' +
            '    content\n' +
            '    image{\n' +
            '      alt\n' +
            '      url\n' +
            '    }\n' +
            '  }\n' +
            '}'
      })
    })
        .then(res=>res.json())
        .then(({data: {allArticles}})=>setArticles(allArticles))
        .catch(err=>console.log(err));
  },[])

  return (
      <Wrapper>
        <Title>Schülerzeitung</Title>
        <Articles>
          {articles ? articles.map((article)=>{
            console.log(article)
            return (

                <Article>
                <ArticleImage>
                <img
           src={article.image.url} alt={article.image.alt}/>
            </ArticleImage>
            <div>
              <h3>{article.titel}</h3>
              <p>{article.content}</p>
            </div>
          </Article>
            )}):
          <h1>No articles</h1>
          }
        </Articles>
      </Wrapper>
  );
}
//
SchoolNews.propTypes = {};

export default SchoolNews;
