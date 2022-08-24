import React from 'react';
export class CellRendererIngress extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            link: CellRendererIngress.getLinkToDisplay(props),
        };
    }

    render() {
        return (
            <div><a href={this.state.link} target="_blank" rel="noreferrer">{this.state.link}</a></div>
        );
    }

    static getLinkToDisplay(params) {
        if (params && params.data && params.data.ingress)
            return 'https://' + params.data.ingress;
        return '';
    }    
}    