import {ListView} from 'react-native';
import RefreshableListView from './RefreshableListView';
import ControlledRefreshableListView from './ControlledRefreshableListView';
import RefreshingIndicator from './RefreshingIndicator';

Object.assign(RefreshableListView, {
    ListView,
    RefreshingIndicator,
    ControlledRefreshableListView
});
module.exports = RefreshableListView;
