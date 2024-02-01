import React, { useState } from "react";
import "../../css/bootstrap-icons.css"
import "../../css/bootstrap.min.css"
import "../../css/templatemo-topic-listing.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FaqCompanent = (props) => {

    const collapseId = `collapse${props.id}`;

    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${props.id}`}>
                <button
                    className="accordion-button collapsed"
                    style={{ color: '#323736' }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="true"
                    aria-controls={collapseId}
                >
                    {props.title}
                </button>
            </h2>

            <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${props.id}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    Topic Listing is free Bootstrap 5 CSS template.{" "}
                    <strong>You are not allowed to redistribute this template</strong> on
                    any other template collection website without our permission. Please
                    contact TemplateMo for more detail. Thank you.
                </div>
            </div>
        </div>

    )
}

export default FaqCompanent;