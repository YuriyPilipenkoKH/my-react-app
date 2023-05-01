import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
import { Player } from '../components/Player/Player';
import { VideoList } from '../components/VideoLis/VideoLis';
import videos from '../videos.json'


export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };
  
render() {

  return (
    <Container>
   <Section title ={this.state.selectedVideo}>
   <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
   
   <Button>Ripple</Button>

    </Section>
   
    </Container>

   
    )}  
};