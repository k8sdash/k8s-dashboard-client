import React from 'react';
export class CellRendererIngress extends React.Component<{
},
    {
        link: string,
    }>
{
    constructor(props){
        super(props);

        this.state = {
            link: CellRendererIngress.getLinkToDisplay(props),
        };
    }

    render() {
        return (
            <div><a href={this.state.link} target="_blank">{this.state.link}</a></div>
        );
    }

    static getLinkToDisplay(params) {
        if (params && params.data)
            return 'https://' + params.data.name;
        return '';
    }    
}    