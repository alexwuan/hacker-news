import { GraphQLBoolean } from 'graphql';

import gql from 'graphql-tag';

export const ARTICLE_LISTING = gql`
    query ArticleListing {
        articles {
            title
            url
            coverImageUrl
            content
            description
            subtitle
        }
    }
`;

export const ARTICLE_DETAIL = gql`
    query ArticleDetail($url: String!) {
        article(url: $url) {
            title
            url
            coverImageUrl
            content
            description
            subtitle
        }
    }
`;
