import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toolsData } from '@/data/toolsData';
import { ColorPicker } from '@/components/Tools/ColorPicker';
import { PasswordGenerator } from '@/components/Tools/PasswordGenerator';
import { WordCounter } from '@/components/Tools/WordCounter';
import { QRGenerator } from '@/components/Tools/QRGenerator';
import { JSONFormatter } from '@/components/Tools/JSONFormatter';
import { CaseConverter } from '@/components/Tools/CaseConverter';
import { CharacterCounter } from '@/components/Tools/CharacterCounter';
import { ImageResize } from '@/components/Tools/ImageResize';
import { ImageCompress } from '@/components/Tools/ImageCompress';
import { ImageConverter } from '@/components/Tools/ImageConverter';
import { RegexTester } from '@/components/Tools/RegexTester';
import { HtmlEntities } from '@/components/Tools/HtmlEntities';
import { LoremGenerator } from '@/components/Tools/LoremGenerator';
import { RandomNumber } from '@/components/Tools/RandomNumber';
import { AgeCalculator } from '@/components/Tools/AgeCalculator';
import { BMICalculator } from '@/components/Tools/BMICalculator';
import { UnitConverter } from '@/components/Tools/UnitConverter';
import { Base64Encoder } from '@/components/Tools/Base64Encoder';
import { UUIDGenerator } from '@/components/Tools/UUIDGenerator';
import { MetaTagGenerator } from '@/components/Tools/MetaTagGenerator';
import { RobotsGenerator } from '@/components/Tools/RobotsGenerator';
import { SitemapGenerator } from '@/components/Tools/SitemapGenerator';
import { SERPSnippet } from '@/components/Tools/SERPSnippet';
import { HtmlMarkdown } from '@/components/Tools/HtmlMarkdown';
import { HTMLTableGenerator } from '@/components/Tools/HTMLTableGenerator';
import { CodeBeautifier } from '@/components/Tools/CodeBeautifier';
import { TextToSpeech } from '@/components/Tools/TextToSpeech';
import { SpeechToText } from '@/components/Tools/SpeechToText';
import { HashtagGenerator } from '@/components/Tools/HashtagGenerator';
import { EmojiPicker } from '@/components/Tools/EmojiPicker';
import { RandomName } from '@/components/Tools/RandomName';
import { Stopwatch } from '@/components/Tools/Stopwatch';
import { CountdownTimer } from '@/components/Tools/CountdownTimer';
import { TimezoneConverter } from '@/components/Tools/TimezoneConverter';
import { ScreenInfo } from '@/components/Tools/ScreenInfo';
import { KeyboardTester } from '@/components/Tools/KeyboardTester';
import { MouseTester } from '@/components/Tools/MouseTester';
import { JsonCsv } from '@/components/Tools/JsonCsv';
import { TextEncrypt } from '@/components/Tools/TextEncrypt';
import { HashGenerator } from '@/components/Tools/HashGenerator';
import { MemeGenerator } from '@/components/Tools/MemeGenerator';
import { GradientPreview } from '@/components/Tools/GradientPreview';
import { PhotoFilters } from '@/components/Tools/PhotoFilters';
import { SocialPreview } from '@/components/Tools/SocialPreview';
import { APITester } from '@/components/Tools/APITester';
import { HexRgbHsl } from '@/components/Tools/HexRgbHsl';
import { FileHash } from '@/components/Tools/FileHash';
import { URLPreview } from '@/components/Tools/URLPreview';
import { LogoMockup } from '@/components/Tools/LogoMockup';
import { ComingSoon } from '@/components/Tools/ComingSoon';

export const ToolPage = () => {
  const { toolId } = useParams();
  const tool = toolsData.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested tool doesn't exist.</p>
          <Button variant="hero" asChild>
            <Link to="/tools">Back to Tools</Link>
          </Button>
        </div>
      </div>
    );
  }

  const renderToolComponent = () => {
    if (!tool.isWorking) {
      return <ComingSoon tool={tool} />;
    }

    switch (tool.id) {
      case 'color-picker':
        return <ColorPicker />;
      case 'password-generator':
        return <PasswordGenerator />;
      case 'word-counter':
        return <WordCounter />;
      case 'character-counter':
        return <CharacterCounter />;
      case 'case-converter':
        return <CaseConverter />;
      case 'qr-generator':
        return <QRGenerator />;
      case 'json-formatter':
        return <JSONFormatter />;
      case 'uuid-generator':
        return <UUIDGenerator />;
      case 'regex-tester':
        return <RegexTester />;
      case 'html-entities':
        return <HtmlEntities />;
      case 'lorem-generator':
        return <LoremGenerator />;
      case 'image-resize':
        return <ImageResize />;
      case 'image-compress':
        return <ImageCompress />;
      case 'image-converter':
        return <ImageConverter />;
      case 'random-number':
        return <RandomNumber />;
      case 'age-calculator':
        return <AgeCalculator />;
      case 'bmi-calculator':
        return <BMICalculator />;
      case 'unit-converter':
        return <UnitConverter />;
      case 'base64-encoder':
        return <Base64Encoder />;
      case 'meta-generator':
        return <MetaTagGenerator />;
      case 'robots-generator':
        return <RobotsGenerator />;
      case 'sitemap-generator':
        return <SitemapGenerator />;
      case 'serp-snippet':
        return <SERPSnippet />;
      case 'html-markdown':
        return <HtmlMarkdown />;
      case 'html-table-generator':
        return <HTMLTableGenerator />;
      case 'code-beautifier':
        return <CodeBeautifier />;
      case 'text-to-speech':
        return <TextToSpeech />;
      case 'speech-to-text':
        return <SpeechToText />;
      case 'hashtag-generator':
        return <HashtagGenerator />;
      case 'emoji-picker':
        return <EmojiPicker />;
      case 'random-name':
        return <RandomName />;
      case 'stopwatch':
        return <Stopwatch />;
      case 'countdown-timer':
        return <CountdownTimer />;
      case 'timezone-converter':
        return <TimezoneConverter />;
      case 'screen-info':
        return <ScreenInfo />;
      case 'keyboard-tester':
        return <KeyboardTester />;
      case 'mouse-tester':
        return <MouseTester />;
      case 'json-csv':
        return <JsonCsv />;
      case 'text-encrypt':
        return <TextEncrypt />;
      case 'hash-generator':
        return <HashGenerator />;
      case 'meme-generator':
        return <MemeGenerator />;
      case 'gradient-generator':
        return <GradientPreview />;
      case 'photo-filters':
        return <PhotoFilters />;
      case 'social-preview':
        return <SocialPreview />;
      case 'api-tester':
        return <APITester />;
      case 'hex-rgb-hsl':
        return <HexRgbHsl />;
      case 'file-hash':
        return <FileHash />;
      case 'url-preview':
        return <URLPreview />;
      case 'logo-mockup':
        return <LogoMockup />;
      default:
        return <ComingSoon tool={tool} />;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto animate-slide-in-up">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="glass" size="icon" asChild>
              <Link to="/tools">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${tool.isWorking ? 'bg-gradient-primary' : 'bg-muted'} rounded-xl flex items-center justify-center`}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">{tool.name}</h1>
                <p className="text-muted-foreground">{tool.category}</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{tool.description}</p>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-slide-in-up">
          {renderToolComponent()}
        </div>
      </section>
    </div>
  );
};
