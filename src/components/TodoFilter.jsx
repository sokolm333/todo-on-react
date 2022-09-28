import React from 'react';
import CustomSelect from './UI/select/CustomSelect';

const TodoFilter = ({ filter, setFilter, ...props }) => {
  return (
    <div>
      <input placeholder={props.filterPlaceholder}
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <CustomSelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue={props.selectDefaultValue}
        options={[
          { value: 'title', name: 'Title' },
          { value: 'id-top', name: 'Creation | Top' },
          { value: 'id', name: 'Creation | Bottom' },
          { value: 'done-top', name: 'Сompleted | Top' },
          { value: 'done', name: 'Сompleted | Bottom' }
        ]}
      />
    </div>
  );
};

export default TodoFilter;