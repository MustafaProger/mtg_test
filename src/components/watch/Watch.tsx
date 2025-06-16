import { Component, createRef, RefObject } from "react";

class Watch extends Component {
    private timeRef: RefObject<HTMLDivElement | null> = createRef();
    private intervalID: number | undefined;

    componentDidMount(): void {
        this.intervalID = window.setInterval(() => {
            this.timeRef.current!.innerHTML = new Date().toLocaleTimeString()
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
    }

    render() {
        return (
            <div className="watch">
                <div ref={this.timeRef}>{new Date().toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Watch;