export interface Website {
  id: number;
  title: string;
  image: string;
  link: string;
  frontRepository: string;
  backRepository?: string;
  description: string;
}
