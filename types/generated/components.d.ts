import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderComponentsSearchEngines extends Schema.Component {
  collectionName: 'components_header_components_search_engines';
  info: {
    displayName: 'Search Engines';
    icon: 'atom';
    description: '';
  };
  attributes: {
    page_title: Attribute.String & Attribute.Required;
    page_description: Attribute.Text & Attribute.Required;
    index: Attribute.Enumeration<['index', 'noindex']> &
      Attribute.Required &
      Attribute.DefaultTo<'index'>;
    follow: Attribute.Enumeration<['follow', 'nofollow']> &
      Attribute.Required &
      Attribute.DefaultTo<'follow'>;
    og_locale: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'nl-NL'>;
    og_title: Attribute.String & Attribute.Required;
    og_description: Attribute.String & Attribute.Required;
    og_site_name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Move Sport Psychologie'>;
    og_image: Attribute.Media & Attribute.Required;
  };
}

export interface PageComponentsAboutMe extends Schema.Component {
  collectionName: 'components_page_components_about_mes';
  info: {
    displayName: 'About Me';
    icon: 'apple-alt';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Over mij'>;
    image: Attribute.Media & Attribute.Required;
    intro: Attribute.RichText & Attribute.Required;
    signature: Attribute.Media;
  };
}

export interface PageComponentsArticles extends Schema.Component {
  collectionName: 'components_page_components_articles';
  info: {
    displayName: 'Articles';
    icon: 'american-sign-language-interpreting';
    description: '';
  };
  attributes: {
    articles: Attribute.Relation<
      'page-components.articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface PageComponentsClientComponent extends Schema.Component {
  collectionName: 'components_page_components_client_components';
  info: {
    displayName: 'Clients';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    clients: Attribute.Relation<
      'page-components.client-component',
      'oneToMany',
      'api::client.client'
    >;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Partners & Klanten'>;
    intro: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'ui-components.button'>;
  };
}

export interface PageComponentsEvents extends Schema.Component {
  collectionName: 'components_page_components_events';
  info: {
    displayName: 'Events';
    icon: 'air-freshener';
  };
  attributes: {
    socials: Attribute.Relation<
      'page-components.events',
      'oneToMany',
      'api::social.social'
    >;
  };
}

export interface PageComponentsMentalTraining extends Schema.Component {
  collectionName: 'components_page_components_mental_trainings';
  info: {
    displayName: 'Mental Training';
    icon: 'ambulance';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Mentale Training'>;
    image_1: Attribute.Media & Attribute.Required;
    image_2: Attribute.Media & Attribute.Required;
    image_3: Attribute.Media & Attribute.Required;
    intro_1: Attribute.RichText & Attribute.Required;
    intro_2: Attribute.RichText & Attribute.Required;
    intro_3: Attribute.RichText & Attribute.Required;
  };
}

export interface PageComponentsMethods extends Schema.Component {
  collectionName: 'components_page_components_methods';
  info: {
    displayName: 'Methods';
    icon: 'baby';
    description: '';
  };
  attributes: {
    methods: Attribute.Relation<
      'page-components.methods',
      'oneToMany',
      'api::method.method'
    >;
  };
}

export interface PageComponentsPartnerStrip extends Schema.Component {
  collectionName: 'components_page_components_partner_strips';
  info: {
    displayName: 'Partner Strip';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    partners: Attribute.Relation<
      'page-components.partner-strip',
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface PageComponentsProductIntro extends Schema.Component {
  collectionName: 'components_page_components_product_intros';
  info: {
    displayName: 'Product_Intro';
    icon: 'archway';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    intro: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    direction: Attribute.Enumeration<['image_left', 'image_right']> &
      Attribute.Required &
      Attribute.DefaultTo<'image_right'>;
  };
}

export interface PageComponentsServices extends Schema.Component {
  collectionName: 'components_page_components_services';
  info: {
    displayName: 'services';
    icon: 'align-left';
  };
  attributes: {
    services: Attribute.Relation<
      'page-components.services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface UiComponentsAccordion extends Schema.Component {
  collectionName: 'components_ui_components_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'arrow-down';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface UiComponentsArticleCard extends Schema.Component {
  collectionName: 'components_ui_components_article_cards';
  info: {
    displayName: 'Article Card';
    icon: 'audio-description';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    short_description: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface UiComponentsAuthor extends Schema.Component {
  collectionName: 'components_ui_components_authors';
  info: {
    displayName: 'Author';
    icon: 'award';
  };
  attributes: {
    user: Attribute.Relation<'ui-components.author', 'oneToOne', 'admin::user'>;
    author_image: Attribute.Media;
  };
}

export interface UiComponentsButton extends Schema.Component {
  collectionName: 'components_page_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrow-circle-right';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['internal', 'external']> &
      Attribute.Required &
      Attribute.DefaultTo<'internal'>;
    url: Attribute.String & Attribute.Required;
    button_type: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface UiComponentsCardHorizontal extends Schema.Component {
  collectionName: 'components_ui_components_card_horizontals';
  info: {
    displayName: 'Card Horizontal';
    icon: 'arrow-alt-circle-right';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    intro: Attribute.Text & Attribute.Required;
    url: Attribute.String;
    buttons: Attribute.Component<'ui-components.button', true>;
  };
}

export interface UiComponentsCardVertical extends Schema.Component {
  collectionName: 'components_ui_components_card_verticals';
  info: {
    displayName: 'Card Vertical';
    icon: 'arrow-circle-down';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    buttons: Attribute.Component<'ui-components.button', true>;
    intro: Attribute.RichText;
  };
}

export interface UiComponentsHeader extends Schema.Component {
  collectionName: 'components_page_components_headers';
  info: {
    displayName: 'header';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    header_image: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<'ui-components.button', true>;
  };
}

export interface UiComponentsImage extends Schema.Component {
  collectionName: 'components_ui_components_images';
  info: {
    displayName: 'Image';
    icon: 'ad';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    max_width: Attribute.Integer;
  };
}

export interface UiComponentsRichText extends Schema.Component {
  collectionName: 'components_ui_components_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-center';
  };
  attributes: {
    rich_text: Attribute.RichText;
  };
}

export interface UiComponentsTextBlock extends Schema.Component {
  collectionName: 'components_ui_components_text_blocks';
  info: {
    displayName: 'Text block';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    avatar: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-components.search-engines': HeaderComponentsSearchEngines;
      'page-components.about-me': PageComponentsAboutMe;
      'page-components.articles': PageComponentsArticles;
      'page-components.client-component': PageComponentsClientComponent;
      'page-components.events': PageComponentsEvents;
      'page-components.mental-training': PageComponentsMentalTraining;
      'page-components.methods': PageComponentsMethods;
      'page-components.partner-strip': PageComponentsPartnerStrip;
      'page-components.product-intro': PageComponentsProductIntro;
      'page-components.services': PageComponentsServices;
      'ui-components.accordion': UiComponentsAccordion;
      'ui-components.article-card': UiComponentsArticleCard;
      'ui-components.author': UiComponentsAuthor;
      'ui-components.button': UiComponentsButton;
      'ui-components.card-horizontal': UiComponentsCardHorizontal;
      'ui-components.card-vertical': UiComponentsCardVertical;
      'ui-components.header': UiComponentsHeader;
      'ui-components.image': UiComponentsImage;
      'ui-components.rich-text': UiComponentsRichText;
      'ui-components.text-block': UiComponentsTextBlock;
    }
  }
}
