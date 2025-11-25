export const PROJECTS_DATA = [
    {
        id: 'test#1',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        start_date: 2023,
        end_date: 2024,
        title: 'IA pour la santé prédictive',
        short_abstract: "Développement d'algorithmes d'apprentissage profond pour la détection précoce de maladies à partir d'images médicales.",
        extend_abstract: "La méthode Object.assign permet de ne copier que les propriétés énumérables et propres (les propriétés qui ne sont pas héritées) depuis un objet source vers un objet cible. Elle utilise [[Get]] sur l'objet source et [[Set]] sur l'objet cible, ainsi, elle déclenchera les accesseurs/mutateurs. De cette façon, elle affecte les propriétés plutôt que de juste les copier ou d'en définir de nouvelles. Aussi, il est déconseillé d'utiliser cette méthode si on souhaite uniquement fusionner de nouvelles propriétés dans un prototype si un des objets sources contient des accesseurs. Pour uniquement copier les définitions des propriétés (y compris leur énumérabilité) dans des prototypes, on utilisera plutôt Object.getOwnPropertyDescriptor() et Object.defineProperty().",
        authors: 'M. Durand, C. Dubois'
    },
    {
        id: 'proj#1',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
        start_date: 2024,
        end_date: 2027,
        title: 'Système expert pour la maintenance prédictive des réseaux industriels',
        short_abstract: "Développement d’un système expert hybride combinant règles métier et modèles statistiques pour anticiper les pannes sur des infrastructures critiques.",
        extend_abstract: "Le projet vise à concevoir un moteur d’inférences capable de fusionner des connaissances expertes structurées et des signaux issus de capteurs IoT. L'approche combine une base de connaissances formalisée en logiques descriptives et des modèles prédictifs entraînés sur des séries temporelles. L’objectif est d’obtenir un système explicable permettant d’assister les opérateurs dans la prise de décision, tout en améliorant la fiabilité et la disponibilité des réseaux industriels.",
        authors: 'J. Lefèvre, A. Benali'
    },
    {
        id: 'proj#2',
        image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&h=400&fit=crop',
        start_date: 2023,
        end_date: 2025,
        title: 'Knowledge Graph pour la modélisation d’écosystèmes urbains',
        short_abstract: "Construction d’un graphe de connaissances pour représenter les interactions entre mobilité, énergie et environnement en ville.",
        extend_abstract: "Le projet développe une ontologie modulaire basée sur OWL afin de représenter des systèmes complexes urbains. Des techniques d’extraction automatique d’informations à partir de rapports municipaux et de données open-data permettront d’enrichir dynamiquement le graphe. Des algorithmes de raisonnement seront intégrés pour évaluer différents scénarios d’aménagement en termes de pollution, flux de transport ou consommation énergétique.",
        authors: 'L. Martin, P. Rodriguez'
    },
    {
        id: 'proj#3',
        image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&h=400&fit=crop',
        start_date: 2025,
        end_date: 2028,
        title: 'Détection d’anomalies dans les chaînes logistiques par apprentissage contrastif',
        short_abstract: "Utilisation de modèles auto-supervisés pour détecter des ruptures ou comportements inattendus dans les flux logistiques.",
        extend_abstract: "Le projet consiste à exploiter l’apprentissage contrastif pour apprendre des représentations robustes de séries temporelles multidimensionnelles. Une architecture type SimCLR adaptée aux données séquentielles est développée pour extraire des embeddings discriminants. Ces représentations sont ensuite utilisées pour identifier des anomalies structurelles dans les réseaux d’approvisionnement afin d’améliorer la résilience des chaînes logistiques.",
        authors: 'M. Zhao, T. Bernard'
    },
    {
        id: 'proj#4',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
        start_date: 2024,
        end_date: 2026,
        title: 'Système d’aide à la décision pour la robotique collaborative',
        short_abstract: "Conception d’un module de planification contextuelle permettant aux robots collaboratifs de mieux comprendre l’intention humaine.",
        extend_abstract: "Ce projet propose d’introduire une fusion entre reconnaissance des gestes humains (via capteurs inertiels et vision par ordinateur) et planification symbolique automatisée. Le robot adapte son comportement en temps réel grâce à un modèle probabiliste des intentions humaines combiné à un raisonneur basé sur PDDL. Le système vise à améliorer la sécurité et la fluidité dans les environnements industriels collaboratifs.",
        authors: 'N. Pereira, H. Schmidt'
    },
    {
        id: 'proj#5',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
        start_date: 2027,
        end_date: 2030,
        title: 'Plateforme sémantique pour la recherche scientifique augmentée',
        short_abstract: "Création d’une plateforme capable de structurer, relier et analyser automatiquement les articles scientifiques.",
        extend_abstract: "Le système exploite des techniques de NLP avancées, notamment le parsing de dépendances, l’extraction d’entités nommées et la reconnaissance d’affirmations scientifiques. Les documents sont intégrés dans un graphe de connaissances interconnecté permettant de détecter tendances, contradictions et résultats similaires. L’objectif est d’aider les chercheurs à naviguer efficacement dans la littérature scientifique.",
        authors: 'C. Nguyen, F. Rousseau'
    },
    {
        id: 'proj#6',
        image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&h=400&fit=crop',
        start_date: 2025,
        end_date: 2029,
        title: 'IA embarquée pour drones autonomes en environnement contraint',
        short_abstract: "Développement de modèles IA légers optimisés pour la navigation autonome dans des zones difficiles.",
        extend_abstract: "Le projet étudie des architectures de réseaux neuronaux compressés (quantization-aware training, pruning) visant à réduire la consommation énergétique tout en conservant des performances en perception et décision. Une attention particulière est portée à la détection d’obstacles et aux trajectoires adaptatives. L’objectif est d’intégrer l’IA en autonomie totale dans des plateformes embarquées limitées.",
        authors: 'R. El-Khoury, M. Pereira'
    },
    {
        id: 'proj#7',
        image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&h=400&fit=crop',
        start_date: 2023,
        end_date: 2026,
        title: 'Modélisation cognitive pour assistants intelligents pédagogiques',
        short_abstract: "Création d’un modèle cognitif permettant d’adapter en temps réel les exercices proposés à un apprenant.",
        extend_abstract: "L’approche combine un modèle BKT (Bayesian Knowledge Tracing) avec un module d’inférence basé sur des règles pour modéliser l’état cognitif d’un apprenant. Le système génère automatiquement des activités personnalisées en fonction de la progression estimée, des erreurs commises et du niveau de difficulté optimal. Il vise à améliorer l'efficacité de l’apprentissage assisté par ordinateur.",
        authors: 'S. Dupont, K. Almeida'
    },
    {
        id: 'proj#8',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
        start_date: 2024,
        end_date: 2027,
        title: 'Automatisation intelligente du test logiciel à base de modèles',
        short_abstract: "Développement d’outils de génération automatique de tests à partir de modèles comportementaux d’applications.",
        extend_abstract: "Le projet exploite les modèles de transitions d’états, les automates temporisés et les spécifications UML pour générer automatiquement des scénarios de test couvrant un maximum de comportements critiques. Des heuristiques d’optimisation permettent de réduire l’espace des tests, tandis que des techniques d’apprentissage améliorent la détection de cas limites. L’objectif est d’accroître la robustesse des logiciels tout en diminuant les coûts de test.",
        authors: 'B. Caron, D. Fischer'
    },
    {
        id: 'proj#9',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
        start_date: 2022,
        end_date: 2024,
        title: 'Système d’inférence symbolique-neuronal pour la cybersécurité',
        short_abstract: "Fusion entre réseaux neuronaux et règles expertes pour détecter des comportements malveillants sophistiqués.",
        extend_abstract: "Le projet propose une architecture neuro-symbolique capable de raisonner explicitement sur des graphes d'événements de sécurité. Les embeddings générés par un GNN sont combinés avec un moteur logique permettant d’expliquer les décisions et d’enrichir la détection d’intrusions complexes. Le système vise une détection plus robuste, interprétable et capable de s’adapter rapidement à de nouvelles menaces.",
        authors: 'E. Moreau, G. Silva'
    },
    {
        id: 'proj#10',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop',
        start_date: 2021,
        end_date: 2024,
        title: 'Architecture distribuée pour l’analyse temps réel de données massives',
        short_abstract: "Conception d’un framework distribué optimisé pour le streaming data à faible latence.",
        extend_abstract: "Le projet développe un moteur de traitement basé sur un paradigme micro-batch hybride avec exécution spéculative. Il intègre un ordonnanceur adaptatif capable de redistribuer la charge selon la pression mémoire et le débit réseau. L’objectif est d'améliorer la scalabilité pour des applications critiques telles que la surveillance de réseaux, la finance temps réel ou l’analyse d’événements industriels.",
        authors: 'T. Renault, V. Santos'
    }
]