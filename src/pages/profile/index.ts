import Handlebars from 'handlebars';

import './styles.scss';
import Block from '../../core/Block';
import { ProfileTmpl } from './profile.tmpl';
import { ProfileContent } from '../../components/profileContent';

const profile = Handlebars.compile(ProfileTmpl);

export class Profile extends Block {
  constructor(props: {}) {
    const profileContent = new ProfileContent({});

    super( { profileContent, ...props });
  }

  render() {
    return this.compile(profile, this.props);
  }
}
