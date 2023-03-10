import React, { Component } from "react";
import Pagination from "./Pagination";

class GenotypesTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            variantConsequence: {}
        };
    }

    render() {
        const error = this.props.error;
        const isLoaded = this.props.isLoaded;
        const studies = this.props.studies;
        const variants = this.props.variants;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div style={{"overflow": "scroll"}}>
                    <table className="vf-table--compact">
                        <thead className="vf-table__header">
                            <tr className="vf-table__row">
                                <th className="vf-table__heading" scope="col">Chr</th>
                                <th className="vf-table__heading" scope="col">Pos</th>
                                <th className="vf-table__heading" scope="col">Ref</th>
                                <th className="vf-table__heading" scope="col">Alt</th>
                                {studies.map(study => (
                                    <th key={study} className="vf-table__heading" scope="col">{study}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="vf-table__body">
                            {variants.map((item, idx, arr) => (
                                <tr key={idx} className="vf-table__row">
                                    <td className="vf-table__cell | vf-table__heading" scope="row">{item.chromosome}</td>
                                    <td className="vf-table__cell | vf-table__heading" scope="row">{item.start}</td>
                                    <td className="vf-table__cell | vf-table__heading" scope="row">{item.reference}</td>
                                    <td id={`${item.chromosome}_${item.start}_${item.reference}_${item.alternate}`}
                                        className="vf-table__cell | vf-table__heading" scope="row"
                                        style={{"backgroundColor": item.color}}
                                        title={item.consequenceName}
                                        >{item.alternate}</td>
                                    {studies.map(study => (
                                        <td key={study} className="vf-table__cell">{item.alleleFreqs[study]}</td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                    </table>
                    <Pagination
                        currentPage={this.props.currentPage}
                        numPages={this.props.numPages}
                        onPageChange={this.props.onPageChange} />
                </div>
            );
        }
    }
}

export default GenotypesTable;
