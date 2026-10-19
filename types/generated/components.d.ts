import type { Schema, Struct } from '@strapi/strapi';

export interface CategoriaLinks extends Struct.ComponentSchema {
  collectionName: 'components_categoria_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PesquisaCamposPesquisa extends Struct.ComponentSchema {
  collectionName: 'components_pesquisa_campos_pesquisas';
  info: {
    displayName: 'campos_pesquisa';
  };
  attributes: {
    conteudo: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'categoria.links': CategoriaLinks;
      'pesquisa.campos-pesquisa': PesquisaCamposPesquisa;
    }
  }
}
