import {useQuery} from '@realm/react';
import {Text, View} from 'react-native';
import {User} from '../utils/User';

const TaskItem = ({_id}: {_id: number}) => {
  const tasks = useQuery(User);

  console.log(tasks[0]);

  return <View></View>;
};

export default TaskItem;
