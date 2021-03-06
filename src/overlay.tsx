import * as React from "react"
import * as ReactDOM from "react-dom"
import olOverlay from "ol/overlay"
import { Util } from "./util"
import { MapContext, Map } from "./map"

class Overlay extends React.Component<any, any> {
    overlay: olOverlay
    el: HTMLElement

    options: any = {
        id: undefined,
        element: undefined,
        offset: undefined,
        position: undefined,
        stopEvent: undefined,
        insertFirst: undefined,
        autoPan: undefined,
        autoPanAnimation: undefined,
        autoPanMargin: undefined,
    }

    events: any = {
        change: undefined,
        "change:element": undefined,
        "change:map": undefined,
        "change:offset": undefined,
        "change:position": undefined,
        "change:positioning": undefined,
        propertychange: undefined,
    }

    render() {
        return <div>{this.props.children}</div>
    }

    componentDidMount() {
        let options = Util.getOptions(Object["assign"](this.options, this.props))
        options.element = ReactDOM.findDOMNode(this).querySelector("div")
        // console.log('options.element', options.element);
        this.overlay = new olOverlay(options)
        this.props.mapComp.overlays.push(this.overlay)
    }
}

export default props => <MapContext.Consumer>{mapComp => <Overlay {...props} mapComp={mapComp} />}</MapContext.Consumer>
