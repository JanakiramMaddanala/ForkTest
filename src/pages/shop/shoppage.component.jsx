import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_COLLECTION from './shop.collection';

export default class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collection: SHOP_COLLECTION,
        };
    }
    render() {
        const { collection } = this.state;
        return (
            <div>
                {collection.map(({ id, ...otherItemProps }) => (
                    <CollectionPreview key={id} {...otherItemProps} />
                ))}
            </div>
        );
    }
}
