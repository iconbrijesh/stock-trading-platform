import './Services.css';

function Services({ title, options }) {
    const collapseId = `collapse-${title.replace(/\s+/g, '-')}`;
    const headingId = `heading-${title.replace(/\s+/g, '-')}`;

    return (
        <div className="accordion service mb-1" id={`accordion-${title}`}>
            <div className="accordion-item">
                <h2 className="accordion-header" id={headingId}>
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="true"
                        aria-controls={collapseId}
                    >
                        {title}
                    </button>
                </h2>
                <div
                    id={collapseId}
                    className="accordion-collapse collapse "
                    aria-labelledby={headingId}
                    data-bs-parent={`#accordion-${title}`}
                >
                    <div className="accordion-body">
                        <ul>
                            {options.map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="service-link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;