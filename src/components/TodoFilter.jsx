import React from 'react';
import CustomSelect from './UI/select/CustomSelect';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input placeholder='search...'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <CustomSelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Choose"
        options={[
          { value: 'title', name: 'Title' },
          { value: 'id', name: 'Creation' },
          { value: 'done', name: 'Сompleted' }
        ]}
      />
    </div>
  );
};

export default TodoFilter;