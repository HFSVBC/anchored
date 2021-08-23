import React, {
  forwardRef, useEffect, useImperativeHandle, useState,
} from 'react';
import PropTypes from 'prop-types';

const SeverityFilter = forwardRef((props, ref) => {
  const [filterText, setFilterText] = useState([]);

  useImperativeHandle(ref, () => (
    {
      doesFilterPass(params) {
        let passed = true;
        const value = props.valueGetter(params);

        if (filterText.length > 0 && filterText.indexOf(value.toString().toLowerCase()) < 0) {
          passed = false;
        }

        return passed;
      },

      isFilterActive() {
        return filterText > [];
      },

      getModel() {
        return { value: filterText };
      },

      setModel(model) {
        setFilterText(model.value);
      },
    }
  ));

  const onChange = (event) => {
    if (event.target.checked) {
      const tmpFilterText = [...filterText];
      tmpFilterText.push(event.target.value);
      setFilterText(tmpFilterText);
    } else {
      setFilterText(filterText.filter((e) => e !== event.target.value));
    }
  };

  useEffect(() => {
    props.filterChangedCallback();
  }, [filterText]);

  return (
    <div className="ag-filter-body-wrapper ag-simple-filter-body-wrapper">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="critical" id="severityCriticalCheck" onChange={onChange} />
        <label className="form-check-label" htmlFor="severityCriticalCheck">
          Critical
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="high" id="severityHighCheck" onChange={onChange} />
        <label className="form-check-label" htmlFor="severityHighCheck">
          High
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="medium" id="severityMediumCheck" onChange={onChange} />
        <label className="form-check-label" htmlFor="severityMediumCheck">
          Medium
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="low" id="severityLowCheck" onChange={onChange} />
        <label className="form-check-label" htmlFor="severityLowCheck">
          Low
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="negligible" id="severityNegligibleCheck" onChange={onChange} />
        <label className="form-check-label" htmlFor="severityNegligibleCheck">
          Negligible
        </label>
      </div>
    </div>
  );
});

SeverityFilter.propTypes = {
  filterChangedCallback: PropTypes.func.isRequired,
  valueGetter: PropTypes.func.isRequired,
};

export default SeverityFilter;
