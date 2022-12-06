import useCollapse from 'react-collapsed';

// https://www.npmjs.com/package/react-collapsed

export default function Collapsible({ title, description }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <article className="collapsible">
      <div className="collapsible__header" {...getToggleProps()}>
        <h2>{title}</h2>
        <div className="icon">
          <i className={'fas fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <p className="collapsible__content">{description}</p>
      </div>
    </article>
  );
}
