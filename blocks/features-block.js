import {
  FeatureSection, FeatureList, Feature, FeatureImage, 
  FeatureText, FeatureTitle, 
} from '../components/Feature'
import { Button } from '../components/Button'

export default function FeaturesBlock({features}) {
  return (
    <FeatureSection>
      <FeatureList>
        {
          features.map(f => (
            <Feature key={f.title} >
              <FeatureImage src={f.image}/>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureText>{f.desc}</FeatureText>
              <Button as="a" href={hero.btnUrl}>
                  {hero.btnTxt}
              </Button>
            </Feature>
          ))
        }
      </FeatureList>
    </FeatureSection>
  )
}