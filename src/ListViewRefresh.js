import {ListView} from 'react-native';
import ControlledRefreshableListView from './ControlledRefreshableListView';
import RefreshingIndicator from './RefreshingIndicator';

Object.assign(ControlledRefreshableListView, {
    ListView,
    RefreshingIndicator
});
module.exports = ControlledRefreshableListView;
